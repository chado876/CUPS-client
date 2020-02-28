import { Component, OnInit } from '@angular/core';
import { Manager } from 'src/app/Entities/manager';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-signin',
  templateUrl: './manager-signin.component.html',
  styleUrls: ['./manager-signin.component.scss']
})


export class ManagerSigninComponent{

  constructor(private router: Router) {}

 managerModel = new Manager('M100','passcode');
 managers = [];

  onSubmit() {
    console.log(this.managerModel);
    this.managers.push(this.managerModel);
    var JSONmanager = JSON.stringify(this.managers);
    localStorage.setItem('manager',JSONmanager);

   var defaultManager = {
     mID: "M200",
     password: "pword"

   }

    console.log(defaultManager);
    if(JSON.stringify(this.managerModel) === JSON.stringify(defaultManager)){
      console.log("It works");
      this.router.navigate(['/', 'managerpage']);

    } else {
      console.log("It nah work");
      console.log(JSON.stringify(this.managerModel));
      console.log(JSON.stringify(defaultManager));

    }

  }


}
