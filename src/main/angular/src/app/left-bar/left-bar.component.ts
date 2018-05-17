import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.css']
})
export class LeftBarComponent implements OnInit {
  @Input() isCollapsed: boolean;

  constructor(private router: Router) {
  }

  toOrderFlow(event) {
    this.router.navigate(['order-info'], {queryParams : event, skipLocationChange: true });
  }

  ngOnInit() {
  }

}
