import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";

@Injectable()
export class SettingsService {

  public snapshoturl = 'http://mokulive.stream/record/';
  public rtmpLiveUrl = 'rtmp://go.mokulive.stream/live/';
  public httpflvLiveUrl = 'http://go.mokulive.stream:8880/live?app=live&stream=';
  public hlsLiveUrl = 'http://mokulive.stream/hls/';

  public queryUrls:any;
  private devUrl = 'http://localhost:3000';
  private prodUrl = 'http://64.137.224.204:3000';

  constructor() {


    if (environment.production) {
      this.queryUrls = {
        // login:`${this.prodUrl}/login`,
        callback: `http://localhost:5000/callback`,
        getRoomInfo: `${this.prodUrl}/live/getRoom?userName=qingyanjiu@126.com`,
      }
    }
    else {
      this.queryUrls = {
        // login:`${this.devUrl}/login`,
        // register:`${this.devUrl}/user/add`,
        // getAllLives:`${this.devUrl}/live/`,
        callback: `http://localhost:5000/callback`,
        getRoomInfo: `${this.devUrl}/live/getRoom?userName=qingyanjiu@126.com`,
      }
    }
  }
}
