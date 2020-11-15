import { Component, OnInit } from '@angular/core'; 


export interface Categorytypes {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
 

export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    Categories : Categorytypes [] = [
    {value: 'Mobile-phones', viewValue: 'Mobile phones'},
    {value: 'Television', viewValue: 'Television'},
    {value: 'Computers', viewValue: 'Computers'}
  ];    
  subCategories : Categorytypes [] = [
    {value: 'Samsung', viewValue: 'Samsung'},
    {value: 'Nokia', viewValue: 'Nokia'},
    {value: 'Iphone', viewValue: 'Iphone'}
  ];    
  Faults : Categorytypes [] = [
    {value: 'Promax', viewValue: 'Screen broken'},
    {value: 'X3', viewValue: 'Battery is dead'},
    {value: 'Z1', viewValue: 'Dropped in water'}
  ];

  


}
