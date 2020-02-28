import { Component, OnInit } from '@angular/core';
import {Customer} from 'src/app/Entities/customer';

@Component({
  selector: 'app-customer-signup',
  templateUrl: './customer-signup.component.html',
  styleUrls: ['./customer-signup.component.scss']
})

export class CustomerSignupComponent{
  customerModel = new Customer('John','Doe','pword');

  customers = [];

  onSubmit() {
    console.log(this.customerModel);
    this.customers.push(this.customerModel);
    var JSONcustomers = JSON.stringify(this.customers);
    localStorage.setItem('Customer',JSONcustomers);

  }
}

