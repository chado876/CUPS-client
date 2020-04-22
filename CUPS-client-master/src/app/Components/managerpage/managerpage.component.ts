import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/Services/manager.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-managerpage',
  templateUrl: './managerpage.component.html',
  styleUrls: ['./managerpage.component.scss']
})
export class ManagerpageComponent  {


  constructor() {
    // this.authService.isAuthenticated.subscribe(
    //   (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    // );
  }

    // async ngOnInit() {
    //   this.isAuthenticated = await this.authService.checkAuthenticated();
    // }

    // logout() {
    //   this.authService.logout('/');
    // }
}
