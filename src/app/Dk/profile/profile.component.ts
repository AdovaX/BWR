import { Component, OnInit } from '@angular/core';
 import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
const baseUrl = 'http://localhost:4201';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
@Injectable()
export class ProfileComponent implements OnInit {

  constructor (private http:HttpClient){ }

  ngOnInit(): void {

  }
 
   getData(){

  
 
  }
}
