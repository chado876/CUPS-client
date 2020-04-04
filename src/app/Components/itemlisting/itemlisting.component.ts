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


}


