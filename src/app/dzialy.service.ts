import { Injectable } from '@angular/core';
import { Dzial } from './dzial';
import { DZIALY } from './mock-dzialy'
import { Observable } from 'rxjs/observable'
import { of } from 'rxjs/observable/of'

@Injectable()
export class DzialyService {

  constructor() { }

  getDzialy(): Observable<Dzial[]> {
    return of(DZIALY);
  }

}
