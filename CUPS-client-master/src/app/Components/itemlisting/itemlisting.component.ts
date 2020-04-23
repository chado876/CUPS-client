import { Component, OnInit } from '@angular/core';
import { CartItem, BaseCartItem } from 'ng-shopping-cart';
import { ItemService } from 'src/app/Services/item.service'
import { Item } from 'src/app/Entities/item';

@Component({
  selector: 'app-itemlisting',
  templateUrl: './itemlisting.component.html',
  styleUrls: ['./itemlisting.component.scss'],
  
})


export class ItemlistingComponent implements OnInit{


  items:Item[]=[];
  
  constructor(
    private itemService : ItemService
  ) { }
  
  
  ngOnInit() { 
    //this.itemService.getAll().subscribe(items=>this.items = items);
    this.itemService
    .getAll()
    .subscribe(data =>{
      this.items = data;
    },error=>{
      console.error(error)
      window.alert("We were unable to retrieve your items at this time")
    });

    }

    itemModel = new Item({ name: 'Espresso', category:'Beverage', cost: 6.99, 
    stock: 10, id: 10, url:'https://www.naukrinama.com/stressbuster/wp-content/uploads/2018/09/black-coffee.jpg', 
    asl:'https://www.naukrinama.com/stressbuster/wp-content/uploads/2018/09/black-coffee.jpg'});

    addtoCart(item : Item){

      item.stock = item.stock - 1;
      this.itemService.updateItem(item).subscribe(() => console.log(item));
    }


}


