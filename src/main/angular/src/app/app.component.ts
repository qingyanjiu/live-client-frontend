import {Component, AfterViewInit, ElementRef, Renderer2} from '@angular/core';
import {EmitService} from "./service/emit.service";

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

  el: ElementRef;
  _hostElem;

  constructor(private renderer: Renderer2,el: ElementRef,private emitService: EmitService) {
    this.el = el;
    this._hostElem = this.el.nativeElement;
  }

  ngAfterViewInit(): void {

  }

}
