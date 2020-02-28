import { Component, OnInit } from '@angular/core';
import {Item} from 'src/app/Entities/item';

@Component({
  selector: 'app-add-item-page',
  templateUrl: './add-item-page.component.html',
  styleUrls: ['./add-item-page.component.scss']
})
export class AddItemPageComponent {

  constructor() {}
  itemModel = new Item('Espresso',6.99,10,'es10');

  items = [];

  onSubmit() {
    console.log(this.itemModel);
    this.items.push(this.itemModel);
    var JSONitems = JSON.stringify(this.items);
    localStorage.setItem('item',JSONitems);

  }


}
