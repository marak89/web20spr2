import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DzialyService } from '../dzialy.service';
import { InvoiceService } from '../invoice.service';
import { CustomersService } from '../customers.service';
import { Customer } from '../customer';

import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Invoice } from '../invoice';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  invoice: Invoice;
  myControl: FormControl;
  customers: Customer[];
  filteredOptions: Observable<Customer[]>;
  selectedCustomer: Customer;
  constructor(
    private router: Router,
    private dzialyService: DzialyService,
    private invoiceService: InvoiceService,
    private customersService: CustomersService
  ) {
    this.myControl = new FormControl();

  }

  getInvoice() {
    this.invoiceService.getInvoice().subscribe(invoice => this.invoice = invoice);
  }

  ngOnInit() {
    this.getInvoice();

    if (this.invoice.dzial.id === 0 ) {
      this.router.navigate(['wybierzdzial']);
    } else {
      this.getCustomers();
    }


  }

  filter(val: string): Customer[] {
    return this.customers.filter(
      customer =>
      (customer.name.toLowerCase().includes(
        val.toLowerCase()
      ))
      ||
      (customer.lastname.toLowerCase().includes(
        val.toLowerCase()
      ))
    );
  }

  getCustomers() {
    // while(!this.customers){
      console.log('subskrybuje');
      console.log(this.invoice.dzial.id);
      this.customersService.getCustomers(this.invoice.dzial.id).subscribe(
      customers => this.customers = customers,
      (err) => console.error(err),
      () => {
        this.filteredOptions = this.myControl.valueChanges
          .pipe(
            startWith(''),
            map(val => this.filter(val))
          );
        // console.log(this.customers);
      });
    // }

  }

  clickOnCustomer(customer: Customer) {
    console.log(customer);

    this.selectedCustomer = customer;
    this.myControl.disable();
  }

  clickSaveSelectedCustomer() {
    this.invoiceService.setCustomer(this.selectedCustomer);
    this.router.navigate(['invoicecontent']);
  }

}
