import {Component, Inject, OnInit} from '@angular/core';
import {DA_SERVICE_TOKEN, ITokenService} from "@delon/auth";
import {LiveService} from "../service/live.service";
import {SettingsService} from "../service/settings.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-live-list',
  templateUrl: './live-list.component.html',
  styleUrls: ['./live-list.component.css']
})
export class LiveListComponent implements OnInit {

  snapshoturl;

  lives:any[];

  constructor(@Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
              private liveService:LiveService,
              private settingsService:SettingsService,
              private router: Router,) { }

  ngOnInit() {
    this.snapshoturl = this.settingsService.snapshoturl;

    this.liveService.getAllLives()
      .subscribe(result=>{
          this.lives = result;
        },
        error => {
          this.router.navigate(['login'], {queryParams : event, skipLocationChange: true });
        }
      );
  }

}
