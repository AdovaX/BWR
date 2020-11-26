import { Component, OnInit } from '@angular/core';
 import { HttpClient } from "@angular/common/http";
 import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { SocialAuthService, SocialUser } from 'angularx-social-login';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
@Injectable()
export class ProfileComponent implements OnInit {
person;

  user_profile = new FormGroup({
     full_name: new FormControl(),
     user_email: new FormControl(),
     user_address: new FormControl(),
     user_dob: new FormControl(),
     user_phone: new FormControl()
});
user: SocialUser;

  constructor (private http:HttpClient,private authService: SocialAuthService){ }

  ngOnInit(): void {

    this.authService.authState.subscribe(user => {
     this.user = user;

     });
   
 }
 
   getData(){

this.person = this.http.get('/backend/usersw').subscribe(response => console.log(response));

  
  }
}
