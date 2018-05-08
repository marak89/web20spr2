import { Injectable } from '@angular/core';
import { Customer } from './customer';


import { HttpClient, HttpHeaders } from '@angular/common/http'
import { MessageService } from './message.service'

import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
//import { toBase64String } from '@angular/compiler/src/output/source_map';

@Injectable()
export class CustomersService {

  private customerUrl = 'https://sandbox.desire24.com/api/customers/';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  private log(message: string) {
    this.messageService.add('CustomersService: ' + message);
  }

  getCustomers(): Observable<Customer[]> {
    let username: string = 'username';
    let password: string = 'password';
    let headers: HttpHeaders = new HttpHeaders("Authorization Basic " + btoa(username + ":" + password) );
    // headers.append("Authorization", "Basic " + btoa(username + ":" + password)); 
    // headers.append("Content-Type", "application/x-www-form-urlencoded");
    console.log(headers);
    return this.http.get<Customer[]>(this.customerUrl,{headers:headers}).pipe(
      catchError(this.handleError('getHeroes', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };

  }
}
