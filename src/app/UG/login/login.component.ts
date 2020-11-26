import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SocialAuthService, SocialLoginModule } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { UserService } from '../Services/user.service';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
  AmazonLoginProvider,
  VKLoginProvider,
} from 'angularx-social-login';

//import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [SocialLoginModule, SocialAuthService]
})
export class LoginComponent implements OnInit {

  user: SocialUser;
  submitted = false;
  form: FormGroup;

  constructor(private authService: SocialAuthService, private router: Router,
     private userService: UserService,
     private readonly fb: FormBuilder) {
       
      this.form = this.fb.group({
        email: [],
        password:[],
        firstName:[],
        userName:[],
        confirmPassword:[]
       });
     }

ngOnInit() {

    const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});



   /* this.authService.authState.subscribe(user => {
      this.user = user;

     this.socialDetails(this.user);

    });*/
  }

  
 
 /* socialDetails(socialUser: SocialUser){

    console.log("socialUser========"+socialUser)

    this.userService.addUser(socialUser)
      .subscribe( data => {
        console.log(data);
        this.router.navigate(['']);
      });

   }*/


  /*signInWithGoogle(): void {
    
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }*/
  async signInWithGoogle(): Promise<any> {  

    this.user=await this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    console.log(this.user);
    this.router.navigate(['Dashboard']).then(() => {
      window.location.reload();
    });
    //coommeted for temprory pupose above code is hardcoded 
    /*this.userService.socialRegister(this.user).subscribe( data => {
        console.log(data);
        this.router.navigate(['Dashboard']);
      });*/
  }


  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signInWithAmazon(): void {
    this.authService.signIn(AmazonLoginProvider.PROVIDER_ID);
  }

  signInWithVK(): void {
    this.authService.signIn(VKLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }
  login(){
    
  }

  submitForm() {
    this.userService.registerUser(this.form.getRawValue()).subscribe( data => {
      console.log(data);
      this.form.reset();
      this.router.navigate(['Successorfailure']);
    });

  }
  loginsubmit()
    {
      console.log(this.form.getRawValue());
      if(this.form.getRawValue().email==null){

       

      }
      else{
        this.userService.loginUser(this.form.getRawValue()).subscribe( data => {
          console.log(data);
          this.form.reset();
          this.router.navigate(['Dashboard']);
        });

      }
      
      
    }

}
