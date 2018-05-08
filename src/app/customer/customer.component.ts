import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DzialyService } from '../dzialy.service';
import { InvoiceService } from '../invoice.service';
import { CustomersService } from '../customers.service';
import { Customer } from '../customer';

import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  myControl: FormControl = new FormControl();
  customers: Customer[];
  filteredOptions: Observable<Customer[]>;

  constructor(
    private route: ActivatedRoute,
    private dzialyService: DzialyService,
    private invoiceService: InvoiceService,
    private customersService: CustomersService
  ) { }


  ngOnInit() {
     this.getCustomers();
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val))
      );
  }

  filter(val: string): Customer[] {
    return this.customers.filter(
      option => option.name.toLowerCase().includes(
        val.toLowerCase()
    )
  );
  }

  getCustomers() {
    this.customersService.getCustomers().subscribe(customers => this.customers = customers);

  }

}
