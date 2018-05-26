import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {
  AbstractControl,
  FormBuilder, FormControl,
  FormGroup,
  Validators
} from '@angular/forms';


@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  signInValidateForm: FormGroup;
  signUpValidateForm: FormGroup;
  height: number;

  constructor(private el: ElementRef, private renderer: Renderer2,private fb: FormBuilder) {
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
      remember: [ true ]
    });
    this.signUpValidateForm = this.fb.group({
      signUpUserName: [ null, [ Validators.required ] ],
      signUpPassword: [ null, [ Validators.required ] ],
      remember: [ true ]
    });
  }

}
