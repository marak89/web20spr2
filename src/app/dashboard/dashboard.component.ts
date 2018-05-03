import { Component, OnInit } from '@angular/core';
import { Dzial } from '../dzial';
//import { currentInvoice } from '../currentInvoice';
import { Invoice } from '../invoice';
import { ActivatedRoute } from '@angular/router';
import { DzialyService } from '../dzialy.service'
import { InvoiceService } from '../invoice.service';
//import { MessageService } from '../message.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  dzialy: Dzial[];
  invoice: Invoice;

  constructor(
    private route: ActivatedRoute,
    private dzialyService: DzialyService,
    private invoiceService: InvoiceService,
    
  ) { }

  ngOnInit() {
    this.getDzialy();
    this.getInvoice();
  }

  getDzialy(): void {
    //console.log(typeof this.dzialyService.getDzialy());
    //console.log(this.dzialyService.getDzialy());

    this.dzialyService.getDzialy().subscribe(dzialy => this.dzialy = dzialy);
    // this.dzialy = this.dzialyService.getDzialy();
  }

  getInvoice(){
    this.invoiceService.getInvoice().subscribe(invoice => this.invoice = invoice);
  }

  setDzial(dzial: Dzial): void {
    console.log("Wybieram", dzial);
    this.invoiceService.setDzial(dzial);
    
    //currentInvoice.dzial = dzial;
    console.log(this.invoice.dzial);
  }

}
