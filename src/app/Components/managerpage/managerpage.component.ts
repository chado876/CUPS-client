import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/Services/manager.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-managerpage',
  templateUrl: './managerpage.component.html',
  styleUrls: ['./managerpage.component.scss']
})
export class ManagerpageComponent implements OnInit {

  constructor(private app: ManagerService, private http: HttpClient) {
  }
  
  authenticated() { return this.app.authenticated; }

  ngOnInit() {
  }

}
