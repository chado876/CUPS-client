import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-customer-sidebar',
  templateUrl: './customer-sidebar.component.html',
  styleUrls: ['./customer-sidebar.component.scss']
})
export class CustomerSidebarComponent implements OnInit {

  constructor(private orderService : OrderService) { }

  ngOnInit() {
  }


  numofItems(){
    let num = this.orderService.getAmt();
    return num;
  }
  
}
