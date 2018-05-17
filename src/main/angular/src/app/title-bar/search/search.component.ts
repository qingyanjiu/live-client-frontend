import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  _value = '';
  _type:string = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this._type = 'Web Order Id';
  }

  onSearch(event: any): void {
    // console.log(event);
    this.router.navigate(['order-info'], {queryParams : event, skipLocationChange: true });
  }

}
