import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { order } from '../Entities/order';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orderUrl = 'http://localhost:8090/api/orders';
  
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(
    private http: HttpClient
  ) { }



addOrder (order: Order): Observable<Order> {
  this.tokens = token;
  this.httpOptions.headers.set('Authorization','Bearer '+token)
  return this.http.post<order>(this.orderUrl, order, this.httpOptions).pipe(
  tap((neworder: order) => this.log(`added order w/ id=${neworder.id}`)),
  catchError(this.handleError<order>('addorder'))
  );
  }

  getorder(id: Number): Observable<order> {
    const url = `${this.orderUrl}/${id}`;
    return this.http.get<order>(url).pipe(
      tap(_ => this.log(`fetched order id=${id}`)),
      catchError(this.handleError<order>(`getorder id=${id}`))
    );
  }


      deleteorder (order: order | number): Observable<order> {
  const id = typeof order === 'number' ? order : order.id;
  const url = `${this.orderUrl}/${id}`;

  return this.http.delete<order>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted order id=${id}`)),
    catchError(this.handleError<order>('deleteorder'))
  );
}


  getAll(): Observable<order[]> {

    //  return of(this.orders);
    let ordersApi = ajax('http://localhost:8090/api/orders')
      .pipe(
        map(res => {
          if (!res.response) {
            throw new Error("NO order DATA Received")
          }
          return res.response as order[]
        }),
        catchError(err => {
          console.error(err);
          return of([] as order[])
        })
      )
    return ordersApi;
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
      console.log(`orderService: ${message}`);
      }
}
