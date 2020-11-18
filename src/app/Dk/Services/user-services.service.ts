import { Injectable } from '@angular/core';
import {User} from '../Models/user.model';
import { HttpClient } from '@angular/common/http';
import * as Rx from "rxjs/Rx";
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import{ Brands } from '../Models/brands';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

Brands_list : User[]=[
{
  Brand_id : 1,
  Brand_name:"Nokia"
},
{
  Brand_id : 2,
  Brand_name:"Real me"
}

];

  constructor(private httpClient: HttpClient) {}

get_brands_list(){

 return this.Brands_list;
}
  getUsers() {
    return this.httpClient.get(`/backend/listOfBrands`).
        pipe(
           map((data: Brands[]) => {
             return data;
           }), catchError( error => {
             return throwError( 'Something went wrong!' );
           })
        )
    }

}
