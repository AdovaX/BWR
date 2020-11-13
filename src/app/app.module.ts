import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './Dk/home/home.component';
import { HeaderComponent } from './Dk/header/header.component';
import { FooterComponent } from './Dk/footer/footer.component';
import { ComplaintComponent } from './Dk/complaint/complaint.component';
import { ContactComponent } from './Dk/contact/contact.component';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
 import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatBadgeModule} from '@angular/material/badge';
import {MatExpansionModule} from '@angular/material/expansion';


  import { HttpClientModule } from "@angular/common/http";

import { ProfileComponent } from './Dk/profile/profile.component';
import { NotificationsComponent } from './Dk/notifications/notifications.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ComplaintComponent,
    ContactComponent,
    ProfileComponent,
    NotificationsComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
