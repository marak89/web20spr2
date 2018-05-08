import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InvoiceContentComponent } from './invoice-content/invoice-content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  { path: 'invoicecontent', component: InvoiceContentComponent },
  { path: 'wybierzdzial', component: DashboardComponent },
  { path: 'wybierzKlienta', component: CustomerComponent },
  { path: '', redirectTo: '/wybierzdzial', pathMatch: 'full' },
]

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
