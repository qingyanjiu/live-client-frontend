import {Component, ElementRef, Inject, OnInit, Renderer2} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {
  AbstractControl,
  FormBuilder, FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import {DA_SERVICE_TOKEN, ITokenService} from "@delon/auth";
import {UserService} from "../service/user.service";
import {Router} from "@angular/router";
import {EmitService} from "../service/emit.service";


@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  signInValidateForm: FormGroup;
  signUpValidateForm: FormGroup;
  height: number;

  constructor(private el: ElementRef, private renderer: Renderer2,private fb: FormBuilder,
              @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
              private userService:UserService,
              private router: Router,
              private emitService:EmitService) {
  }

  resizeContent() {
    const hostElem = this.el.nativeElement;
    let height = window.innerHeight - 64 - 34;
    this.renderer.setStyle(hostElem.querySelector('.signup-div'), 'height', height + 'px');
    this.renderer.setStyle(hostElem.querySelector('.signin-div'), 'height', height + 'px');
    hostElem.querySelectorAll('.sign-form-div').forEach(item=>{
      this.renderer.setStyle(item, 'margin-top', (height/2 - 200) + 'px');
    });

    // this.renderer.setStyle(hostElem.querySelector('.signup-form-div'), 'height', (height/2 - 60) + 'px');
  }

  signInSubmitForm(): void {
    for (const i in this.signInValidateForm.controls) {
      this.signInValidateForm.controls[ i ].markAsDirty();
      this.signInValidateForm.controls[ i ].updateValueAndValidity();
    }
    let userName = this.signInValidateForm.controls.signInUserName.value;
    let password = this.signInValidateForm.controls.signInPassword.value;
    if(userName && password && userName !== '' && password !== '') {
      this.userService.login({username: userName, password: password})
        .subscribe((result:Response) => {
          let token = result.headers.get('Authorization');
          if(token) {
            this.tokenService.set({token: token,username:userName});
            this.emitService.eventEmit.emit(`loginSuccess`);
            this.router.navigate(['live-list'], {queryParams : {}, skipLocationChange: true });
          }
        });
    }
  }

  signUpSubmitForm(): void {
    for (const i in this.signUpValidateForm.controls) {
      this.signUpValidateForm.controls[ i ].markAsDirty();
      this.signUpValidateForm.controls[ i ].updateValueAndValidity();
    }
  }

  ngOnInit() {
    this.resizeContent();
    Observable.fromEvent(window, 'resize')
      .debounceTime(100)
      .subscribe((event) => {
        this.resizeContent();
      });


    this.signInValidateForm = this.fb.group({
      signInUserName: [ null, [ Validators.required ] ],
      signInPassword: [ null, [ Validators.required ] ],
    });
    this.signUpValidateForm = this.fb.group({
      signUpUserName: [ null, [ Validators.required ] ],
      signUpPassword: [ null, [ Validators.required ] ],
    });
  }

}
