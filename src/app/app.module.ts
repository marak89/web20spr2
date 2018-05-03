import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { InvoiceContentComponent } from './invoice-content/invoice-content.component';

import { FormsModule } from '@angular/forms';

import { AngularDraggableModule } from 'angular2-draggable';
import { SortablejsModule } from 'angular-sortablejs';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DzialyService } from './dzialy.service';
import { InvoiceService } from './invoice.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service'

@NgModule({
  declarations: [
    AppComponent,
    InvoiceContentComponent,
    DashboardComponent,
    MessagesComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularDraggableModule,
    SortablejsModule.forRoot({ animation: 10 }),
    AppRoutingModule,
  ],
  providers: [
    DzialyService,
    InvoiceService,
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
