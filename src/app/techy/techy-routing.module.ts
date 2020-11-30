import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TDashboardComponent } from './t-dashboard/t-dashboard.component';

const routes: Routes = [
{ path: '', component: TDashboardComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechyRoutingModule { }
