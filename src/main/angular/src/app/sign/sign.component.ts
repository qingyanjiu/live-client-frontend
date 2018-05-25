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

  validateForm: FormGroup;
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

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
  }

  ngOnInit() {
    this.resizeContent();
    Observable.fromEvent(window, 'resize')
      .debounceTime(100)
      .subscribe((event) => {
        this.resizeContent();
      });


    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ]
    });
  }

}
