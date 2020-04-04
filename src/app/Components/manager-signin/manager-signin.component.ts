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


export class ManagerSigninComponent{

  credentials = {id: '', password: ''};

  login() {
    this.app.authenticate(this.credentials, () => {
        this.router.navigateByUrl('/');
    });
    return false;
  }


  constructor(private app: ManagerService, private http: HttpClient, private router: Router) {
    this.app.authenticate(undefined, undefined);
  }
  logout() {
    this.http.post('logout', {}).finally(() => {
        this.app.authenticated = false;
        this.router.navigateByUrl('/login');
    }).subscribe();
  }
}
