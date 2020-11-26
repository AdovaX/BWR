import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Dk/home/home.component';
 import { RepairComponent } from './Dk/repair/repair.component';
import { ProfileComponent } from './Dk/profile/profile.component';
import { ContactComponent } from './Dk/contact/contact.component';
import { NotificationsComponent } from './Dk/notifications/notifications.component';
import { HistoryComponent } from './Dk/history/history.component';
import { TrackComponent } from './Dk/track/track.component';
//import { LoginComponent } from './Dk/login/login.component';
import { LoginComponent } from './UG/login/login.component';
import { PartsComponent } from './Dk/parts/parts.component';
import { SuccessandfailureComponent } from './Dk/successandfailure/successandfailure.component';
import { ForgotpasswordComponent } from './UG/forgotpassword/forgotpassword.component';

const routes: Routes = [
{ path: '', component: LoginComponent, pathMatch: 'full' },
{ path: 'Login', component: LoginComponent, pathMatch: 'full' },
{ path: 'Repair', component: RepairComponent, pathMatch: 'full' },
{ path: 'Profile', component: ProfileComponent, pathMatch: 'full' },
{ path: 'Contact', component: ContactComponent, pathMatch: 'full' },
{ path: 'Tracking', component: TrackComponent, pathMatch: 'full' },
{ path: 'Parts', component: PartsComponent, pathMatch: 'full' },
{ path: 'Login', component: LoginComponent, pathMatch: 'full' },
{ path: 'Notifications', component: NotificationsComponent, pathMatch: 'full' },
{ path: 'History', component: HistoryComponent, pathMatch: 'full' },
{ path: 'Dashboard', component: HomeComponent, pathMatch: 'full' },
{path:'Successorfailure',component:SuccessandfailureComponent, pathMatch: 'full'},
{path:'Forgotpassword',component:ForgotpasswordComponent, pathMatch: 'full'}

];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
