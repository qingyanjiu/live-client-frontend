import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {SettingsService} from "./settings.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class UserService {

  private headers;


  constructor(private http: HttpClient,private settingsService:SettingsService) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
    this.headers.append('Authorization', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE1Mjc0MzAwOTksImhhc2giOiI4ZjczNjBjOGFjZmEzMzI1OTc0Zjg3NWQ4Mzg2ZjkxYiIsInVzZXJuYW1lIjoidGVzdCJ9.z7wfX7aoCf9K1lA5QSUFrfMltQf1-1SDR7tMu17kvk0w8FQDLn2o162RSsizWVcmnXvu9yxkUosMZHvr9pWkig');
  }

  login(params:any):Observable<any>{
    let url = this.settingsService.queryUrls.login;
    return this.http.post(
      url,
      {username:params.username,password:params.password},
      {headers:this.headers});
  }

  getUsers(params:any):Observable<any>{
    let url = this.settingsService.queryUrls.users;
    return this.http.post(
      url,
      {},
      {headers:this.headers});
  }
}
