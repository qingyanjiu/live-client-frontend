import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";

@Injectable()
export class SettingsService {

  public queryUrls:any;

  constructor() {

    if (environment.production) {
      this.queryUrls = {
        orderFlow: {
          getMockUpData: '/assets/static/mockup.json',
          getOrderInfo: 'http://localhost:8080/webservice/selectOrderInfo/{objType}/{objID}',
          getLogs: 'http://localhost:8080/webservice/selectLogs/CCWORDERLINEID/{objID}',
          getLifecycles4CCWOrderLine: 'http://localhost:8080/webservice/getOrderLifeCycle/{objID}',
        }
      }
    }
    else {
      this.queryUrls = {
        orderFlow: {
          getMockUpData: '/assets/static/mockup.json',
          getOrderInfo: 'http://localhost:8080/webservice/selectOrderInfo/{objType}/{objID}',
          getLogs: 'http://localhost:8080/webservice/selectLogs/CCWORDERLINEID/{objID}',
          getLifecycles4CCWOrderLine: 'http://localhost:8080/webservice/getOrderLifeCycle/{objID}',
        }
      }
    }
  }
}
