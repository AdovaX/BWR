import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SocialUser } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  baseurl: string = "http://localhost:4000/";

 

  socialRegister(userDetails: SocialUser){

    console.log("service==================>"+JSON.stringify(userDetails));
    return this.http.post(this.baseurl + 'accounts/socialRegister', userDetails);
  }

  registerUser(registrationDetails: any){

    console.log("registrationDetails==================>"+JSON.stringify(registrationDetails));
    return this.http.post(this.baseurl + 'accounts/register', registrationDetails);
    //return 'success';
  }

  loginUser(loginDetails:any){
    console.log("loginDetails==================>"+JSON.stringify(loginDetails));
    return this.http.post(this.baseurl + 'accounts/authenticate', loginDetails);
  }

  requestReset(requestedEmail:any){

    return null;

  }

  /*getAllProducts(){
    return this.http.get<ProductModel[]>(this.baseurl + 'Products');
  }

  getProductById(id: string){
    return this.http.get<ProductModel>(this.baseurl + 'Products' + '/' + id);
  }

  addProduct(product: ProductModel){
    return this.http.post(this.baseurl + 'Products', product);
  }

  deleteProduct(id: string){
    return this.http.delete(this.baseurl + 'Products' + '/' + id);
  }

  updateProduct(product: ProductModel){
    return this.http.put(this.baseurl + 'Products' + '/' + product._id, product);
  }*/
}