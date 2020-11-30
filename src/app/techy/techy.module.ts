import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechyRoutingModule } from './techy-routing.module';
import { TDashboardComponent } from './t-dashboard/t-dashboard.component';


@NgModule({
  declarations: [TDashboardComponent],
  imports: [
    CommonModule,
    TechyRoutingModule
  ]
})
export class TechyModule { }
