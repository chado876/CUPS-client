import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { Item } from '../Entities/item';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orderUrl = 'http://localhost:8090/api/orders';
  private itemList: Item[] = [];
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(
    private http: HttpClient
  ) { }

  setOrder(item:Item){
      this.itemList.push(item);
      this.setCost(item);
  }

  getOrder(){
      return this.itemList;
  }

  amount = 0;

  setAmt(){
        this.amount++;
  }

  getAmt(){
    return this.amount;
  }

  cost = 0;
  setCost(item:Item){
    this.cost = item.cost + this.cost;
  }

  getCost(){
    return this.cost;
  }


}
