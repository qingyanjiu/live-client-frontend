import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {SettingsService} from "./settings.service";

@Injectable()
export class OrderFlowService {

  constructor(private http: HttpClient,private settingsService:SettingsService) { }

  getOrderInfo(params:any):Observable<any>{
    let url = this.settingsService.queryUrls.orderFlow.getOrderInfo;
    url = url.replace('{objType}',this.settingsService.typeMapping[params.type]);
    url = url.replace('{objID}',params.id);
    return this.http.get(url);
  }

  getLogs(ccwOrderLineId:string):Observable<any> {
    let url = this.settingsService.queryUrls.orderFlow.getLogs;
    // url = url.replace('{objType}',this.settingsService.typeMapping[params.type]);
    url = url.replace('{objID}',ccwOrderLineId);
    return this.http.get(url);
  }

  getLifecycles4CCWOrderLine(ccwOrderLineId):Observable<any> {
    let url = this.settingsService.queryUrls.orderFlow.getLifecycles4CCWOrderLine;
    url = url.replace('{objID}',ccwOrderLineId);
    return this.http.get(url);
  }

}
