import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOfInvoices } from './table-of-invoices';

describe('TableOfInvoices', () => {
  let component: TableOfInvoices;
  let fixture: ComponentFixture<TableOfInvoices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableOfInvoices],
    }).compileComponents();

    fixture = TestBed.createComponent(TableOfInvoices);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
