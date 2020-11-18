import { Injectable } from '@angular/core';
import {User} from '../Models/user.model';

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

  constructor() { }

get_brands_list(){

 return this.Brands_list;
}


}
