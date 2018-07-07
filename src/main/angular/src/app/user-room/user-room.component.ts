import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-room',
  templateUrl: './user-room.component.html',
  styleUrls: ['./user-room.component.css']
})
export class UserRoomComponent implements OnInit {

  roomName:string;
  roomPass:string;
  withPass = false;

  constructor() { }

  ngOnInit() {
  }

}
