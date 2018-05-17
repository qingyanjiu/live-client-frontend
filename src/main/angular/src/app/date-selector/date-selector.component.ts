import { Component, OnInit } from '@angular/core';
import * as moment from "moment";

@Component({
  selector: 'app-date-selector',
  templateUrl: './date-selector.component.html',
  styleUrls: ['./date-selector.component.css']
})
export class DateSelectorComponent implements OnInit {

  dateRange:any[];
  type:string = 'calendar';
  size:number = 14;
  color:string = '#347db0';
  dateRangeSize:string = 'middle';
  visible = false;

  style = {'float':'right','position':'relative','top':'-4px','right':'6px'};

  constructor() {
    this.dateRange = [];
  }

  dateSelectorSearch(event){
    this.visible = false;
    console.log(this.dateRange);
  }

  generateDate(type) {
    this.dateRange = [];
    if(type === 'test') {
      this.dateRange[0] = moment().subtract(1, 'months').toDate();
      this.dateRange[1] = moment().subtract(1, 'weeks').toDate();
    }
  }

  ngOnInit() {
  }

}
