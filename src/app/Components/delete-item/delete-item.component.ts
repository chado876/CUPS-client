import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/Entities/item';
import { ItemService } from 'src/app/Services/item.service';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.scss']
})
export class DeleteItemComponent implements OnInit {

  items:Item[]=[];
  items$: Observable<Item[]>;
  loaded:boolean=false;

  constructor(private itemService: ItemService) {}

  delete(item: Item): void {
    this.items = this.items.filter(h => h !== item);
    this.itemService.deleteItem(item).subscribe();
  }

  ngOnInit() {
    this.itemService
    .getAll()
    .subscribe(data =>{
      this.items = data;
    },error=>{
      console.error(error)
      window.alert("We were unable to retrieve your items at this time")
    });

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

}
