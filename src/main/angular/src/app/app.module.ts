import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
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
import { DelonAuthModule, SimpleInterceptor } from '@delon/auth';
import { SignComponent } from './sign/sign.component';

@NgModule({
  declarations: [
    AppComponent,
    HighchartsChartComponent,
    TitleBarComponent,
    SearchComponent,
    AvatarComponent,
    MenuComponent,
    IndexComponent,
    SignComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    NgbModule.forRoot(),
    DelonAuthModule.forRoot(),
    AppRoutingModule,
  ],
  providers   : [
    { provide: NZ_I18N, useValue: en_US },
    OrderFlowService, EmitService,
    SettingsService,
    { provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
