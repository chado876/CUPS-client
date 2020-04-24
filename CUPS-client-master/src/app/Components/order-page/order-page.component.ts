import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/Services/order.service';
import { Item } from 'src/app/Entities/item';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {

  constructor(
        private orderService:OrderService

  ) { }

  ngOnInit() {
  }

  items: Item[] =this.orderService.getOrder();

  getItems(){
    return this.items;
  }


  getCost(){
    var cost:number;
      cost = this.orderService.getCost();
      return cost;
  }

  numofItems(){
    let num = this.orderService.getAmt();
    return num;
  }


}
