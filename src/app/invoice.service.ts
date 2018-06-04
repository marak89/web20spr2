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
    if(INVOICE.dzial != dzial){
      INVOICE.dzial = dzial;
      INVOICE.customer = {
        id: 0,
        lastname: "<NIE ZDEFINIOWANO>",
        name: "<NIE ZDEFINIOWANO>",
        status: 0,
        zip: "<NIE ZDEFINIOWANO>",
        city: "<NIE ZDEFINIOWANO>",
        ten: "<NIE ZDEFINIOWANO>",
        ssn: "<NIE ZDEFINIOWANO>",
        regon: "<NIE ZDEFINIOWANO>",
        rbe: "<NIE ZDEFINIOWANO>",
        icn: "<NIE ZDEFINIOWANO>",
        info: "<NIE ZDEFINIOWANO>",
        notes: "<NIE ZDEFINIOWANO>",
        creationdate: 0,
        moddate: 0,
        creatorid: 0,
        modid: 0,
        deleted: 0,
        message: "<NIE ZDEFINIOWANO>",
        pin: "<NIE ZDEFINIOWANO>",
        cutoffstop: 0,
        consentdate: 0,
        type: 0,
        divisionid: 0,
        paytime: 0,
        countryid: 0,
        paytype: 0,
        einvoice: 0,
        invoicenotice: 0,
        mailingnotice: 0,
        post_zip: "<NIE ZDEFINIOWANO>",
        post_city: "<NIE ZDEFINIOWANO>",
        post_countryid: 0,
        post_name: "<NIE ZDEFINIOWANO>",
        street: "<NIE ZDEFINIOWANO>",
        building: "<NIE ZDEFINIOWANO>",
        apartment: "<NIE ZDEFINIOWANO>",
        post_street: "<NIE ZDEFINIOWANO>",
        post_building: "<NIE ZDEFINIOWANO>",
        post_apartment: "<NIE ZDEFINIOWANO>",
        extid: "<NIE ZDEFINIOWANO>",
    };
    }
    
  }

  setCustomer(customer: Customer){
    INVOICE.customer = customer;
  }

  getCustomer(): Customer{
    console.log('wczytuje takiego customera: ',INVOICE.customer);
    if( INVOICE.customer.id !== 0 ){
      console.log('Wczytany customer jest typu Customer');
      return INVOICE.customer;
    } else {
      console.log('Wczytany customer NIE jest typu Customer');
      return undefined;
    }
    
  }

}
