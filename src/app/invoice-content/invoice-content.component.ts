import { Component, OnInit } from '@angular/core';
import { InvoiceContent } from '../invoiceContent';
import { INVOICECONTENT } from '../mock-invoiceContent';
import { SortablejsOptions } from 'angular-sortablejs';

@Component({
  selector: 'app-invoice-content',
  templateUrl: './invoice-content.component.html',
  styleUrls: ['./invoice-content.component.css']
})
export class InvoiceContentComponent implements OnInit {

  invoiceContents = INVOICECONTENT;
  selectedInvoiceContent;
  isEdited: boolean = false;
  options;
  stawkiVat = [
    0, 8, 23
  ];


  constructor() {
    this.options = {
      onUpdate: (event: any) => {
        this.ustawLp();
      }
    };
  }

  ngOnInit() {
    this.clearSelectedInvoiceContent();
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
    return brutto / (1 + (vat / 100)) ;
  }


  computeInvoiceContent(invoiceContent: InvoiceContent): InvoiceContent {
    let newInvoiceContent = invoiceContent;
    newInvoiceContent.lp = this.invoiceContents.length + 1;

    console.log(newInvoiceContent);

    if (newInvoiceContent.jednostkowaNetto === 0) {
      newInvoiceContent.jednostkowaNetto = this.obliczNettoZBrutto(newInvoiceContent.jednostkowaBrutto,newInvoiceContent.stawkaVat);
    }

    if (newInvoiceContent.jednostkowaBrutto === 0) {
      newInvoiceContent.jednostkowaBrutto = this.obliczBruttoZNetto(newInvoiceContent.jednostkowaNetto, newInvoiceContent.stawkaVat);
    }



    return newInvoiceContent;
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
