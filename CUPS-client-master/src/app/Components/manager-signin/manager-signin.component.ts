import { Component, OnInit } from '@angular/core';
import { Manager } from 'src/app/Entities/manager';
import { Router } from '@angular/router';
import { ManagerService } from 'src/app/Services/manager.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-manager-signin',
  templateUrl: './manager-signin.component.html',
  styleUrls: ['./manager-signin.component.scss']
})



export class ManagerSignInComponent {

  credentials = new Manager({mID:'CHAD', password:'password'});

  // credentials = {id: '', password: ''};

  // login() {
  //   this.app.authenticate(this.credentials, () => {
  //       this.router.navigateByUrl('/');
  //   });
  //   return false;
  // }


  constructor() {

  }

   
  // logout() {
  //   this.http.post('logout', {}).finally(() => {
  //       this.app.authenticated = false;
  //       this.router.navigateByUrl('/login');
  //   }).subscribe();
  // }
}

