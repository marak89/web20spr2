import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { InvoiceContentComponent } from './invoice-content/invoice-content.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularDraggableModule } from 'angular2-draggable';
import { SortablejsModule } from 'angular-sortablejs';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DzialyService } from './dzialy.service';
import { InvoiceService } from './invoice.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { CustomerComponent } from './customer/customer.component'
import { CustomersService } from './customers.service';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule, MatCheckboxModule, MatSelectModule, MatAutocompleteModule } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    InvoiceContentComponent,
    DashboardComponent,
    MessagesComponent,
    CustomerComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularDraggableModule,
    SortablejsModule.forRoot({ animation: 10 }),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatAutocompleteModule
  ],
  providers: [
    DzialyService,
    InvoiceService,
    MessageService,
    CustomersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
