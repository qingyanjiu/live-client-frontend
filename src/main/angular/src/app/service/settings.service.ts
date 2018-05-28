import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";

@Injectable()
export class SettingsService {

  public queryUrls:any;
  private devUrl = 'http://localhost:8000';
  private prodUrl = 'http://64.137.224.204:8000';

  constructor() {

    if (environment.production) {
      this.queryUrls = {
        login:`${this.prodUrl}/login`,
      }
    }
    else {
      this.queryUrls = {
        login:`${this.devUrl}/login`,
        register:`${this.devUrl}/user/add`,
        users:`${this.devUrl}/user/`,
      }
    }
  }
}
