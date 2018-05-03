import { Component, Input } from '@angular/core';
import { Invoice } from './invoice';
import { Dzial } from './dzial';
import { currentInvoice } from './currentInvoice'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Zarządzanie fakturami';
  // invoice: Invoice = currentInvoice;

  constructor(){
    // this.invoice = new Invoice;
  }

  // @Input()
  public setDzial(dzial: Dzial): void{
    // this.invoice.dzial = dzial;
  }

}



