import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/Entities/item';
import { ItemService } from 'src/app/Services/item.service';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-edit-item-page',
  templateUrl: './edit-item-page.component.html',
  styleUrls: ['./edit-item-page.component.scss']
})
export class EditItemPageComponent implements OnInit {
 
  items:Item[]=[];
  loaded:boolean=false;

  items$: Observable<Item[]>;
  private searchTerms = new Subject<string>();

  constructor(private itemService: ItemService) {}

  itemModel = new Item({ name: 'Espresso', category:'Beverage', cost: 6.99, 
  stock: 10, id: 10, url:'https://www.naukrinama.com/stressbuster/wp-content/uploads/2018/09/black-coffee.jpg', 
  asl:'https://www.naukrinama.com/stressbuster/wp-content/uploads/2018/09/black-coffee.jpg'});
  
  ngOnInit(): void {
    if(this.listingView)
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

    this.itemService.getAll().subscribe(success=>{
      if(success){
        this.loaded=true;
      }
 });

  }

listingView:boolean = true;
editView:boolean=false;

switch(item: Item){
  this.itemModel = item;
  this.listingView = !this.listingView;

  // if(!this.listingView){
  //   this.itemService.updateItem(item).subscribe();
  //   console.log(item);
  // }
}

update(item: Item){
  this.itemModel = item;
  this.itemService.updateItem(item).subscribe();
  console.log(item);
  this.itemService.addItem(item)
      .subscribe(item => {
        this.items.push(item);
      });
}


}
