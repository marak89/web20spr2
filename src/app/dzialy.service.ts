import { Injectable } from '@angular/core';
import { Dzial } from './dzial';
import { DZIALY } from './mock-dzialy'
import { Observable, of } from 'rxjs';


@Injectable()
export class DzialyService {

  constructor() { }

  getDzialy(): Observable<Dzial[]> {
    return of(DZIALY);
  }

}
