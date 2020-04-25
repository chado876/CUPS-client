import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Customer } from '../Entities/customer';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customerUrl = 'http://localhost:8090/api/customers';
  
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization':'Bearer '+'bymdot97u8vp' })
  };
  
  constructor(
    private http: HttpClient
  ) { }


  
  tokens:string;

addCustomer (customer: Customer, token : string = ""): Observable<Customer> {
  this.tokens = token;
  this.httpOptions.headers.set('Authorization','Bearer '+token)
  return this.http.post<Customer>(this.customerUrl, customer, this.httpOptions).pipe(
  tap((newCustomer: Customer) => this.log(`added Customer w/ id=${newCustomer.id}`)),
  catchError(this.handleError<Customer>('addCustomer'))
  );
  }

  getCustomer(id: Number): Observable<Customer> {
    const url = `${this.customerUrl}/${id}`;
    return this.http.get<Customer>(url).pipe(
      tap(_ => this.log(`fetched customer id=${id}`)),
      catchError(this.handleError<Customer>(`getCustomer id=${id}`))
    );
  }


      deleteCustomer (customer: Customer | number): Observable<Customer> {
  const id = typeof customer === 'number' ? customer : customer.id;
  const url = `${this.customerUrl}/${id}`;

  return this.http.delete<Customer>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted customer id=${id}`)),
    catchError(this.handleError<Customer>('deletecustomer'))
  );
}


  getAll(): Observable<Customer[]> {

    //  return of(this.customers);
    let customersApi = ajax('http://localhost:8090/api/customers')
      .pipe(
        map(res => {
          if (!res.response) {
            throw new Error("NO customer DATA Received")
          }
          return res.response as Customer[]
        }),
        catchError(err => {
          console.error(err);
          return of([] as Customer[])
        })
      )
    return customersApi;
   }

  loginCustomer : Customer;

   setCustomer(customer: Customer){
    this.loginCustomer = customer;
   }

   getLoginCustomer(){
     return this.loginCustomer;
   }

   
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);
    // Let the app keep running by returning an empty result.
    return of(result as T);
    };
    }

    private log(message: string) {
      console.log(`customerService: ${message}`);
      }
}
