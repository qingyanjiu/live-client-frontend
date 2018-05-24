import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {IndexComponent} from "../index/index.component";

const routes: Routes = [
  {path: '', component: IndexComponent},
  // {path: 'order-info', component: ReplayComponent},
  // {path: 'api-performance', component: ApiPerformanceComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})


export class AppRoutingModule {
}
