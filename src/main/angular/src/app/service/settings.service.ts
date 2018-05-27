import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";

@Injectable()
export class SettingsService {

  public queryUrls:any;
  private devUrl = 'http://64.137.224.204:8000';
  private prodUrl = 'http://x.x.x.x:xxxx';

  constructor() {

    if (environment.production) {
      this.queryUrls = {
        login:`${this.prodUrl}/login`,
      }
    }
    else {
      this.queryUrls = {
        login:`${this.devUrl}/login`,
        users:`${this.devUrl}/user/`,
      }
    }
  }
}
