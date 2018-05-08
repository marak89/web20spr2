import { Injectable } from '@angular/core';
import { Invoice } from './invoice'
import { Dzial } from './dzial'
import { Observable, of } from 'rxjs';
import { INVOICE } from './mock-invoice';
import { MessageService } from './message.service';


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

}
