import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {en_US, NgZorroAntdModule, NZ_I18N} from 'ng-zorro-antd';
import {AppComponent} from './app.component';
import {TitleBarComponent} from "./title-bar/title-bar.component";
import {SearchComponent} from './title-bar/search/search.component';
import {AvatarComponent} from './title-bar/avatar/avatar.component';
import {MenuComponent} from './title-bar/menu/menu.component';
import {OrderFlowService} from "./service/order-flow.service";
import {AppRoutingModule} from "./routing/app-routing.module";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {EmitService} from "./service/emit.service";
import {SettingsService} from "./service/settings.service";
import {HighchartsChartComponent} from './shared/highcharts/highcharts-chart.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    HighchartsChartComponent,
    TitleBarComponent,
    SearchComponent,
    AvatarComponent,
    MenuComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers   : [ { provide: NZ_I18N, useValue: en_US },OrderFlowService, EmitService, SettingsService ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
