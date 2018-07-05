import { Injectable } from '@angular/core';
import {SettingsService} from "./settings.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class LiveService {

  private headers;

  constructor(private http: HttpClient,private settingsService:SettingsService) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8')
      .set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

  getAllLives():Observable<any>{
    let url = this.settingsService.queryUrls.getAllLives;
    return this.http.post(
      url,
      {},
      {headers:this.headers});
  }

  getRoomInfo():Observable<any>{
    let url = this.settingsService.queryUrls.getRoomInfo;
    return this.http.get(url,{headers:this.headers});
  }

}
