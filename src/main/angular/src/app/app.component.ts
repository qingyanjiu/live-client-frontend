import {Component, AfterViewInit, ElementRef, Renderer2} from '@angular/core';
import {EmitService} from "./service/emit.service";

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

  el: ElementRef;
  isCollapsed = false;
  _hostElem;

  sideBarWidthCollapsed = 64;
  sideBarWidthUncollapsed = 200;

  constructor(private renderer: Renderer2,el: ElementRef,private emitService: EmitService) {
    this.el = el;
    this._hostElem = this.el.nativeElement;
  }

  //make left bar sider trigger width the same as left bar width
  refreshLeftSiderTriggerWitdh(width) {
    let parentElem = this._hostElem.parentElement;
    let siderTrigger = parentElem.querySelectorAll('.ant-layout-sider-trigger')[0];
    if(width)
      this.renderer.setStyle(siderTrigger,'width',width + 'px');
    else {
      let leftBarWidth = parentElem.querySelectorAll('.ant-layout-sider')[0].offsetWidth;
      this.renderer.setStyle(siderTrigger, 'width', leftBarWidth + 'px');
    }
  }

  leftBarTrigger(event){
    //if collapsed, side bar width is 64
    let width = this.sideBarWidthCollapsed;
    //if not collapsed side bar width is 200
    if(!event)
      width = this.sideBarWidthUncollapsed;
    this.refreshLeftSiderTriggerWitdh(width);

    //when the collapse button is clicked,
    // **if current menu state is collapsed,
    //  after click the button, the width of content svg will
    //  increase (this.sideBarWidthUncollapsed - this.sideBarWidthUncollapsed);
    //**if current menu state is uncollapsed,
    //  after click the button, the width of content svg will
    //  decrease (this.sideBarWidthUncollapsed - this.sideBarWidthUncollapsed);

    let widthGap:number;
    if(this.isCollapsed) {
      widthGap = this.sideBarWidthUncollapsed - this.sideBarWidthCollapsed;
    }
    else {
      widthGap = this.sideBarWidthCollapsed - this.sideBarWidthUncollapsed;
    }
    //send the gap of width we need to add to svg width
    this.emitService.eventEmit.emit('menuCollapse|'+widthGap);
  }


  ngAfterViewInit(): void {
    // this.refreshLeftSiderTriggerWitdh(null);
  }

}
