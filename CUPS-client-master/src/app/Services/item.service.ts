import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from '../Entities/item';
import { map, catchError, tap, debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';

@Injectable({
  providedIn: 'root'
})



export class ItemService {

  private itemUrl = 'http://localhost:8090/api/items';
  private items : Item[] = [];

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  getItems (): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemUrl)
      .pipe(
        tap(_ => this.log('fetched items')),
        catchError(this.handleError<Item[]>('getItems', []))
      );
  }

  addItem (Item: Item): Observable<Item> {
    return this.http.post<Item>(this.itemUrl, Item, this.httpOptions).pipe(
    tap((newItem: Item) => this.log(`added item w/ id=${newItem.id}`)),
    catchError(this.handleError<Item>('addItem'))
    );
    }

  public add(item:Item):Observable<boolean>{
    // item.id = this.items.length+1;
    this.items.push(item);
    return of(true);
  }

  getAll(): Observable<Item[]> {

    //  return of(this.items);
    let itemsApi = ajax('http://localhost:8090/api/items')
      .pipe(
        map(res => {
          if (!res.response) {
            throw new Error("NO Item DATA Received")
          }
          return res.response as Item[]
        }),
        catchError(err => {
          console.error(err);
          return of([] as Item[])
        })
      )
    return itemsApi;
   }

  //  updateItem (item: Item): Observable<any> {
  //     return this.http.put(this.itemUrl, item, this.httpOptions).pipe(
  //     tap(_ => this.log(`updated Item id=${item.id}`)),
  //     catchError(this.handleError<any>('updateItem',))
  //   );
  //   }

    // updateItem (item: Item): Observable<any> {
    //   return this.http.put<Item>(this.itemUrl, item, this.httpOptions).pipe(
    //   tap(_ => this.log(`updated Item id=${item.id}`)),
    //   catchError(this.handleError('updateItem',item))
    //   );
    //   }

      updateItem(item: Item): Observable<any> {
        const httpOptions = {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return this.http.put(`${this.itemUrl}/${item.id}`, item, httpOptions).pipe(
          tap(updatedItem => console.log(`updated item = ${JSON.stringify(updatedItem)}`)),
          catchError(error => of(new Item()))
        );
      }
   

    getItem(id: Number): Observable<Item> {
      const url = `${this.itemUrl}/${id}`;
      return this.http.get<Item>(url).pipe(
        tap(_ => this.log(`fetched item id=${id}`)),
        catchError(this.handleError<Item>(`getItem id=${id}`))
      );
    }

    deleteItem (item: Item | number): Observable<Item> {
  const id = typeof item === 'number' ? item : item.id;
  const url = `${this.itemUrl}/${id}`;

  return this.http.delete<Item>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted Item id=${id}`)),
    catchError(this.handleError<Item>('deleteItem'))
  );
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
      console.log(`ItemService: ${message}`);
      } 

      private headers = new Headers({'Content-Type': 'application/json'});

      searchItem(term: string): Observable<Item[]> {
        if (!term.trim()) { 
          // if not search term, return empty item array.
          return of([]);
        }
        return this.http.get<Item[]>(`${this.itemUrl}/byName${term}`).pipe(
          tap(x => x.length ?
             this.log(`found item matching "${term}"`) :
             this.log(`no item matching "${term}"`)),
          catchError(this.handleError<Item[]>('searchItems', []))
        );
      }

}
 // searchItems(term: string): Observable<Item[]> {

    //   return this.http.get<Item[]>(`${this.itemUrl}/?id=${term}`).pipe(
    //     tap(x => x.length ?
    //        this.log(`found items matching "${term}"`) :
    //        this.log(`no items matching "${term}"`)),
    //     catchError(this.handleError<Item[]>('searchitems', []))
    //   );
    // }
