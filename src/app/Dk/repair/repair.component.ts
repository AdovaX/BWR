import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../Models/user.model';
import { UserServicesService } from '../Services/user-services.service';
import{ Brands } from '../Models/brands';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-repair',
  templateUrl: './repair.component.html',
  styleUrls: ['./repair.component.css']
})
export class RepairComponent implements OnInit {
isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

//Brands : User[];
Brand_list : Brands[];


    foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor(private _formBuilder: FormBuilder , private UserServices:UserServicesService) {}

  ngOnInit() {

    this.UserServices
    .getUsers()
    .subscribe((data:any) => {  
      this.Brand_list = data; 
    });

 
    this.firstFormGroup = this._formBuilder.group({
      product_name: ['', Validators.required],
      brands_name: ['',Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

  }
 
}