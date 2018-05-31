import {Component, Inject, OnInit} from '@angular/core';
import {DA_SERVICE_TOKEN, ITokenService} from "@delon/auth";

@Component({
  selector: 'app-live-list',
  templateUrl: './live-list.component.html',
  styleUrls: ['./live-list.component.css']
})
export class LiveListComponent implements OnInit {

  lives:any[];

  constructor(@Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService) { }

  ngOnInit() {
    this.lives = [
      {url:'http://mokulive.stream/record/147e4f5c336245db8a8d653376d96b31.png'},
      {url:'http://mokulive.stream/record/061461c074cc4831bb81873b48a5a9b5.png'},
      {url:'http://mokulive.stream/record/b20a9ab616fe4985b7ef46fa7401b0e2.png'},
      {url:'http://mokulive.stream/record/2688e987ba8147bbb0e50e21db7d0fc4.png'},
    ]
  }

}
