import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Customer } from '../Entities/customer';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  private customerUrl = 'http://localhost:8090/api/customerlogin';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization':'Bearer '+'bymdot97u8vp' })
  };

  constructor(
    private http: HttpClient
  ) { }

    login(customer: Customer, digitalIDType: String): Observable<Customer> 
    
}
