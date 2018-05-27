import {Component, Inject, OnInit} from '@angular/core';
import {DA_SERVICE_TOKEN, ITokenService} from "@delon/auth";
import {EmitService} from "../../service/emit.service";

const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})

export class AvatarComponent implements OnInit {

  bgColor:string = '';
  fontColor:string = '';

  shortName:string = '';
  icon = 'anticon anticon-user';

  constructor(@Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
              private emitService:EmitService) { }

  ngOnInit() {
    //observe loginSuccess event
    this.emitService.eventEmit.subscribe((value: any) => {
      if(value.indexOf('loginSuccess') !== -1) {
        let userName = value.split('|')[1];
        if(userName && userName.length>2)
          this.shortName = userName.substring(0,2).toUpperCase();
        else
          this.shortName = userName;
        this.icon = '';
        this.bgColor = this.getRandomColor();
      }
    });

    this.bgColor = '#888';
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
