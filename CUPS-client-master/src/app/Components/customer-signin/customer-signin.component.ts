import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Entities/customer';
import { CustomerService } from 'src/app/Services/customer.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-customer-signin',
  templateUrl: './customer-signin.component.html',
  styleUrls: ['./customer-signin.component.scss']
})
export class CustomerSigninComponent implements OnInit {

  constructor(private customerService: CustomerService,private router: Router) {}

  customerModel = new Customer({id: 1,d_id: 'pword',fname: 'John',lname:'Doe',recording: 'rec.mp3', image: 'img.jpg', balance:500.00});

  fname:string;
  lname:string;
  id:number;
  balance:number;
  d_id:string;
  recording:string;
  image:string;

  ngOnInit() {
  }

  auth:boolean=false;


  login(){
    let customer:Customer = new Customer({
      id:this.customerModel.id,
      fname:this.customerModel.fname,      
     lname:this.customerModel.lname,
      d_id:this.customerModel.d_id,
      recording:this.customerModel.recording,
      image:this.customerModel.image, 
      balance:this.customerModel.balance
    });    
    this.customerService.getCustomer(customer.id).subscribe(success=>{
      if(success){
        this.auth = true;
        this.customerService.getCustomer(customer.id).subscribe(data =>{
          let customer2 = data;
          this.customerService.setCustomer(customer2);
        },error=>{
          console.error(error)
          window.alert("We were unable to retrieve your items at this time")
        });
      }
    });

    if(this.auth==true){
      this.router.navigate(['../customer-page']);
    }
  }
}


