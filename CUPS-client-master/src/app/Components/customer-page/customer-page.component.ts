import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';
import { Item } from 'src/app/Entities/item';
import { ItemService } from 'src/app/Services/item.service';
import { Customer } from 'src/app/Entities/customer';
import { OrderService } from 'src/app/Services/order.service';
import { CustomerService } from 'src/app/Services/customer.service';


@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.scss']
})
export class CustomerPageComponent implements OnInit {

  items$: Observable<Item[]>;
  item: Item[]; 
  private searchTerms = new Subject<string>();
  loaded:boolean=false;


 
  constructor(private itemService: ItemService,  private orderService: OrderService,
    private customerService: CustomerService
    ) {}
  // Push a search term into the observable stream.
  // search(term: string): void {
  //   this.searchTerms.next(term);
    
  // }


  search(term: string): void {
    this.itemService.searchItem(term).subscribe(data =>{
      this.item = data;
      console.log(this.item);
    },error=>{
      console.error(error)
      window.alert("We were unable to retrieve your items at this time")
    });
 
    this.itemService.searchItem(term).subscribe(success=>{
      if(success){
        this.loaded=true;
      }else{
        this.loaded = false;
      }
 });
    
  }

  num:Number;

  ngOnInit(): void {
    this.num = 0;
    this.items$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),


      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.itemService.searchItem(term)),
    );


    this.itemService
    .getAll()
    .subscribe(data =>{
      this.items = data;
    },error=>{
      console.error(error)
      window.alert("We were unable to retrieve your items at this time")
    });
    
  }
 
  update(order: Item){
    order.stock = order.stock - 1;
    this.itemService.updateItem(order).subscribe();
    console.log(order);
    this.itemService.addItem(order)
        .subscribe(order => {
          this.item.push(order);
        });
} 

items:Item[]=[];

 
getBeverages(){
  let beverages = this.items.filter(beverage => beverage.category === 'Beverage');
  return beverages;
}


checkItem(item:Item){
  let inStock:boolean = true;
  if (item.stock == 0){
    inStock=false;
  }
  return inStock;
}

customerModel = this.customerService.getLoginCustomer();

}
