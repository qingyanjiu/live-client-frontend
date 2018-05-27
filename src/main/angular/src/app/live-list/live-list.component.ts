import {Component, Inject, OnInit} from '@angular/core';
import {DA_SERVICE_TOKEN, ITokenService} from "@delon/auth";

@Component({
  selector: 'app-live-list',
  templateUrl: './live-list.component.html',
  styleUrls: ['./live-list.component.css']
})
export class LiveListComponent implements OnInit {

  constructor(@Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService) { }

  ngOnInit() {
  }

}
