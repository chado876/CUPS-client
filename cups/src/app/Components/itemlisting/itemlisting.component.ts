import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itemlisting',
  templateUrl: './itemlisting.component.html',
  styleUrls: ['./itemlisting.component.scss']
})
export class ItemlistingComponent {

  constructor() { }
  
  showItems(){
    var item1,item2,item3,item4;
    
    var Items = [
      item1 = {
        name: "Cappucinno",
        cost: 5.99,
        stock: 10,
        id: 1
      },

      item2 = {
        name: "Espresso",
        cost: 5.99,
        stock: 11,
        id: 2
      },
      item3 = {
        name: "Black Coffee",
        cost: 5.99,
        stock: 12,
        id: 3
      },
      item4 = {
        name: "Americano",
        cost: 5.99,
        stock: 13,
        id: 4
      }
    ];
  }
}
