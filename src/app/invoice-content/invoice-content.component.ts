import { Component, OnInit } from '@angular/core';
import { InvoiceContent } from '../invoiceContent';
import { INVOICECONTENT } from '../mock-invoiceContent';
import { SortablejsOptions } from 'angular-sortablejs';
import { currentInvoice } from '../currentInvoice'
import { InvoiceService } from '../invoice.service';
import { Dzial } from '../dzial';
import { Invoice } from '../invoice';
import { Router } from '@angular/router';


@Component({
  selector: 'app-invoice-content',
  templateUrl: './invoice-content.component.html',
  styleUrls: ['./invoice-content.component.css']
})

export class InvoiceContentComponent implements OnInit {
  invoice: Invoice;
  //dzial: Dzial;
  invoiceContents = INVOICECONTENT;
  selectedInvoiceContent;
  isEdited: boolean = false;
  options;
  stawkiVat = [
    0, 8, 23
  ];


  constructor(
    private invoiceService: InvoiceService,
    private router: Router
  ) {
    this.options = {
      onUpdate: (event: any) => {
        this.ustawLp();
      }
    };
  }

  ngOnInit() {
    this.clearSelectedInvoiceContent();
    this.getInvoice();
    if(this.invoice.dzial.id === 0 ){
      this.router.navigate(['wybierzdzial']);
    }
    if(this.invoice.customer.id === undefined ){
      this.router.navigate(['wybierzKlienta']);
    }

  }
  getInvoice() {
    this.invoiceService.getInvoice().subscribe(invoice => this.invoice = invoice);
  }

  ustawLp(): void {
    let numeracja = 1;
    for (let invoiceContent of this.invoiceContents) {
      //console.log(invoiceContent.lp);
      invoiceContent.lp = numeracja;
      numeracja++;
    }
  }

  onClickDeleteButton(invoiceContent: InvoiceContent): void {
    //console.log("Usuwam item");
    if (confirm('Czy jesteś pewien że chcesz usunąć ' + invoiceContent.lp + ') ' + invoiceContent.name + ' ?')) {
      const index: number = this.invoiceContents.indexOf(invoiceContent);
      if (index !== -1) {
        //console.log("Usuwam item numer  ", index);
        this.invoiceContents.splice(index, 1);
        this.ustawLp();
      }
    }
  }


  obliczBruttoZNetto(netto: number, vat: number): number {
    return (1 + (vat / 100)) * netto;
  }

  obliczNettoZBrutto(brutto: number, vat: number): number {
    return brutto / (1 + (vat / 100));
  }


  computeInvoiceContent(invoiceContent: InvoiceContent): InvoiceContent {
    let nic = invoiceContent;
    nic.lp = this.invoiceContents.length + 1;

    if (nic.jednostkowaNetto === 0) {
      nic.jednostkowaNetto = this.obliczNettoZBrutto(nic.jednostkowaBrutto, nic.stawkaVat);
    }

    if (nic.jednostkowaBrutto === 0) {
      nic.jednostkowaBrutto = this.obliczBruttoZNetto(nic.jednostkowaNetto, nic.stawkaVat);
    }

    if (nic.wartoscNetto === 0) {
      nic.wartoscNetto = nic.jednostkowaNetto * nic.ilosc;
    }

    if (nic.wartoscBrutto === 0) {
      nic.wartoscBrutto = nic.jednostkowaBrutto * nic.ilosc;
    }

    if (nic.kwotaVat === 0) {
      nic.kwotaVat = nic.wartoscBrutto - nic.wartoscNetto;
    }


    return nic;
  }

  // zaznaczanie kolorem czerwonym identycznych pozycji na fakturze!!

  onClickAddButton(): void {
    //console.log('Add button clicked');
    this.invoiceContents.push(this.computeInvoiceContent(this.selectedInvoiceContent));
    this.clearSelectedInvoiceContent();
  }

  onClickEditButton(invoiceContent: InvoiceContent): void {
    this.isEdited = true;
    this.selectedInvoiceContent = invoiceContent;
  }

  onClickResetButton(): void {
    this.clearSelectedInvoiceContent();
   // console.log(this.dzial);
   // console.log(this.invoiceService.getDzial());
  }


  createEmpty(): InvoiceContent {
    let invoiceContent = {
      id: 0,
      lp: 0,
      name: "",
      pkwiu: 0,
      jm: "szt.",
      ilosc: 1,
      jednostkowaNetto: 0,
      jednostkowaBrutto: 0,
      wartoscNetto: 0,
      stawkaVat: 23,
      kwotaVat: 0,
      wartoscBrutto: 0
    }
    return invoiceContent;
  }

  clearSelectedInvoiceContent(): void {
    this.isEdited = false;
    this.selectedInvoiceContent = this.createEmpty();
  }

}
