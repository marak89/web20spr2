import { Injectable } from '@angular/core';
import { Invoice } from './invoice'
import { Dzial } from './dzial'
import { Observable, of } from 'rxjs';
import { INVOICE } from './mock-invoice';
import { MessageService } from './message.service';
import { Customer } from './customer';


@Injectable()
export class InvoiceService {

  constructor(private messageService: MessageService) { }

  getInvoice(): Observable<Invoice> {
    this.messageService.add("get invoice"+Date.now());
    return of(INVOICE);
  }

  setDzial(dzial:Dzial): void{
    this.messageService.add("Ustawiam dzial");
    INVOICE.dzial = dzial;
  }

  setCustomer(customer: Customer){
    INVOICE.customer = customer;
  }

  getCustomer(): Customer{
    console.log('wczytuje takiego customera: ',INVOICE.customer);
    if( INVOICE.customer.id !== undefined ){
      console.log('Wczytany customer jest typu Customer');
      return INVOICE.customer;
    } else {
      console.log('Wczytany customer NIE jest typu Customer');
      return undefined;
    }
    
  }

}
