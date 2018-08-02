import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";

@Injectable()
export class SettingsService {

  public snapshoturl = 'http://mokulive.stream/record/';
  public rtmpLiveUrl = 'rtmp://go.mokulive.stream/live/';
  public httpflvLiveUrl = 'http://edge.mokulive.stream/live?app=live&stream=';
  public hlsLiveUrl = 'http://mokulive.stream/hls/';

  public queryUrls:any;
  private prodUrl = 'http://client-backend.mokulive.stream';
  private devUrl = 'http://client-backend.mokulive.stream';

  constructor() {


    if (environment.production) {
      this.queryUrls = {
        // login:`${this.prodUrl}/login`,
        callback: `http://localhost:5000/callback`,
        createRoom: `${this.prodUrl}/live/openRoom`,
        getRoomInfo: `${this.prodUrl}/live/getRoom?userName={userName}`,
      }
    }
    else {
      this.queryUrls = {
        // login:`${this.devUrl}/login`,
        // register:`${this.devUrl}/user/add`,
        // getAllLives:`${this.devUrl}/live/`,
        callback: `http://localhost:5000/callback`,
        createRoom: `${this.devUrl}/live/openRoom`,
        getRoomInfo: `${this.devUrl}/live/getRoom?userName={userName}`,
      }
    }
  }
}
