import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceContentComponent } from './invoice-content.component';

describe('InvoiceContentComponent', () => {
  let component: InvoiceContentComponent;
  let fixture: ComponentFixture<InvoiceContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
