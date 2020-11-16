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
import { LoginComponent } from './Dk/login/login.component';
import { PartsComponent } from './Dk/parts/parts.component';
import {MatStepperModule} from '@angular/material/stepper';
 
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
    PartsComponent
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
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
