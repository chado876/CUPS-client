import { Component, OnInit } from '@angular/core';
import {Customer} from 'src/app/Entities/customer';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-customer-signup',
  templateUrl: './customer-signup.component.html',
  styleUrls: ['./customer-signup.component.scss']
})

export class CustomerSignupComponent implements OnInit{
  customerModel = new Customer({id: 1,d_id: 'pword',fname: 'John',lname:'Doe',recording: 'rec.mp3', image: 'img.jpg', balance:500.00});

  fname:string;
  lname:string;
  id:number;
  balance:number;
  d_id:string;
  recording:string;
  image:string;

customers: Customer[] = [];
 
constructor(
  private customerService : CustomerService,
    ) { }

    ngOnInit(){
      this.customerService
      .getAll()
      .subscribe(data =>{
        this.customers = data;
      },error=>{
        console.error(error)
        window.alert("We were unable to retrieve your customers at this time")
      });
    }
    addCustomer(): void {
      let customer:Customer = new Customer({
        id:this.customerModel.id,
        fname:this.customerModel.fname,      
       lname:this.customerModel.lname,
        d_id:this.customerModel.d_id,
        recording:this.customerModel.recording,
        image:this.customerModel.image, 
        balance:this.customerModel.balance
      });    
      if (!customer) { return; }
      this.customerService.addCustomer(customer)
        .subscribe(customer => {
          this.customers.push(customer);
        });

    }



  customerz = [];
  onSubmit() {
    console.log(this.customerModel);
    this.customerz.push(this.customerModel);
    var JSONcustomers = JSON.stringify(this.customerz);
    localStorage.setItem('Customer',JSONcustomers);
  }
}

