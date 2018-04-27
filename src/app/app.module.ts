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

@NgModule({
  declarations: [
    AppComponent,
    InvoiceContentComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularDraggableModule,
    SortablejsModule.forRoot({ animation: 10 }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
