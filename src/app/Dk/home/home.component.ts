import { Component, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: SocialUser;

  constructor(private authService: SocialAuthService) { }

  ngOnInit(): void {

     this.authService.authState.subscribe(user => {
      console.log(user);
      this.user = user;

      });
    
  }

  

}


 