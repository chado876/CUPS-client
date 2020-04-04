import { Component, OnInit } from '@angular/core';
import {Item} from 'src/app/Entities/item';
import { ItemService } from 'src/app/Services/item.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-add-item-page',
  templateUrl: './add-item-page.component.html',
  styleUrls: ['./add-item-page.component.scss']
})
 export class AddItemPageComponent implements OnInit {

  categories = [
    'Beverage',
    'Snack',
    'Daily Surprise'
  ];
   itemModel = new Item({ name: 'Espresso', category:'Beverage', cost: 6.99, 
   stock: 10, id: 10, url:'https://www.naukrinama.com/stressbuster/wp-content/uploads/2018/09/black-coffee.jpg', 
   asl:'https://www.naukrinama.com/stressbuster/wp-content/uploads/2018/09/black-coffee.jpg'});

  // onSubmit() {
  //   console.log(this.itemModel);
  //   this.items.push(this.itemModel);
  //   var JSONitems = JSON.stringify(this.items);
  //   localStorage.setItem('item',JSONitems);

  //   // const FileSystem = require("fs");
  //   //  FileSystem.writeFile('items-mock-api/api/items.json', JSONitems);
  // }

  // upload(){
    
  // }

  items : Item[]=[];

  name:string="Espresso";
  cost:number;
  stock:number;
  id:number;
  category:string;
  url:string;
  asl:string;

  constructor(
    private itemService : ItemService,
      ) { }

  ngOnInit() {

        this.itemService
        .getAll()
        .subscribe(data =>{
          this.items = data;
        },error=>{
          console.error(error)
          window.alert("We were unable to retrieve your items at this time")
        });
  }

  addItem(){
    let item:Item = new Item({
      name:this.itemModel.name,
      category:this.itemModel.category,      
      cost:this.itemModel.cost,
      stock:this.itemModel.stock,
      id:this.itemModel.id,
      url:this.itemModel.url,
      asl:this.itemModel.asl

    });    
  //    item = this.items.find((item)=>{
  //         return item.id == this.id
  // })
    console.log("Adding item...", item.name);
    this.itemService.addItem(item)
         .pipe(
           catchError(err=>{
               console.error(err);
               window.alert("Unable to Post, please try again")
               return of(false);
           })
         )
         .subscribe(success=>{
              if(success){
                window.alert("Posted successfully")
              }
         });
   }

   add2(): void {
    let item:Item = new Item({
      name:this.itemModel.name,
      category:this.itemModel.category,      
      cost:this.itemModel.cost,
      stock:this.itemModel.stock,
      id:this.itemModel.id,
      url:this.itemModel.url,
      asl:this.itemModel.asl

    });    
    if (!item) 
    {window.alert("Item failed to add");  
    return; }
    this.itemService.addItem(item)
      .subscribe(item => {
        this.items.push(item);
        console.log(item);
        window.alert("Item added successfully");
      });
  }

//    add(){
//     var settings = {
//       "url": "localhost:8090/api/items",
//       "method": "POST",
//       "timeout": 0,
//       "data": "{\n\t\"name\":\"Black Coffee\"\n\n}",
//     };
    
//     $.ajax(settings).done(function (response) {
//       console.log(response);
//     });
// }
 }



