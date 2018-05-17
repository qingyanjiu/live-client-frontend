import { Component, OnInit } from '@angular/core';

const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})

export class AvatarComponent implements OnInit {

  bgColor:string = '';
  fontColor:string = '';

  constructor() { }

  ngOnInit() {
    this.bgColor = this.getRandomColor();
    this.fontColor = '#FFF';
  }

  getRandomColor(){
    var color = ColorList[Math.ceil(Math.random()*10) % 4];
    // while(color === '347db0')
    //   color = '#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).substr(-6);
    return color;
  }

  log(text){
    console.log(text);
  }

}
