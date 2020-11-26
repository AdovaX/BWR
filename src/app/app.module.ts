import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './Dk/home/home.component';
import { HeaderComponent } from './Dk/header/header.component';
import { FooterComponent } from './Dk/footer/footer.component';
 import { ContactComponent } from './Dk/contact/contact.component';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
 import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatBadgeModule} from '@angular/material/badge';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule} from '@angular/forms';
 import { HttpClientModule } from "@angular/common/http";
import { ProfileComponent } from './Dk/profile/profile.component';
import { NotificationsComponent } from './Dk/notifications/notifications.component';
import { RepairComponent } from './Dk/repair/repair.component';
import { HistoryComponent } from './Dk/history/history.component';
import { TrackComponent } from './Dk/track/track.component';
//import { LoginComponent } from './Dk/login/login.component';
import { LoginComponent } from './UG/login/login.component';
import { PartsComponent } from './Dk/parts/parts.component';
import {MatStepperModule} from '@angular/material/stepper';
import { SuccessandfailureComponent } from './Dk/successandfailure/successandfailure.component';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {UserService} from './UG/Services/user.service';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
  AmazonLoginProvider,
  VKLoginProvider
} from 'angularx-social-login';

import { FormsModule } from '@angular/forms';
import { ForgotpasswordComponent } from './UG/forgotpassword/forgotpassword.component';
import { ResetPasswordComponent } from './UG/reset-password/reset-password.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent, 
    ContactComponent,
    ProfileComponent,
    NotificationsComponent,
    RepairComponent,
    HistoryComponent,
    TrackComponent,
    LoginComponent,
    PartsComponent,
    SuccessandfailureComponent,
    ForgotpasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatInputModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatBadgeModule,
    MatExpansionModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule, 
    ReactiveFormsModule,
    MatStepperModule,
    FormsModule,
    SocialLoginModule
     
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: true,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            //'624796833023-clhjgupm0pu6vgga7k5i5bsfp6qp6egh.apps.googleusercontent.com'
           '890970447819-cb2glbl2hbcjq81s9gubhh1kbr747b92.apps.googleusercontent.com'
          ),
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('561602290896109'),
        },
        {
          id: AmazonLoginProvider.PROVIDER_ID,
          provider: new AmazonLoginProvider(
            'amzn1.application-oa2-client.f074ae67c0a146b6902cc0c4a3297935'
          ),
        },
        {
          id: VKLoginProvider.PROVIDER_ID,
          provider: new VKLoginProvider(
            '7624815'
          ),
        },
      ],
    } as SocialAuthServiceConfig,
  },
  UserService],
  bootstrap: [AppComponent]
})

export class AppModule { }
