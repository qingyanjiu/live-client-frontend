import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  // {path: '', component: ReplayComponent},
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
