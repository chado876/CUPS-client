import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';
import { Item } from 'src/app/Entities/item';
import { ItemService } from 'src/app/Services/item.service';
import { Customer } from 'src/app/Entities/customer';


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

  customerModel = new Customer({id: 96,d_id: 'pword',fname: 'John',lname:'Doe',recording: 'rec.mp3', image: 'img.jpg', balance:500.00});

  constructor(private itemService: ItemService) {}

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

  ngOnInit(): void {
    this.items$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),


      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.itemService.searchItem(term)),
    );
    
  }
 
 
} 
