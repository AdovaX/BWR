import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { NavigationEnd, Router } from '@angular/router';
import { NgZone } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  login:boolean;

  constructor (private zone: NgZone, private router: Router,private authService: SocialAuthService) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/Login'|| event.url === '/' || event.url === '/Forgotpassword' ) {
          //console.log("true");
          this.login= true;
        } else {
         // console.log("false");
          this.login= false;
        }
      }
    });
  }

  ngOnInit(): void {
  
  }
  signOut(): void {
    this.authService.signOut();
    localStorage.removeItem('*');
    sessionStorage.clear();
    this.router.navigate(['']);
  }
  

}
