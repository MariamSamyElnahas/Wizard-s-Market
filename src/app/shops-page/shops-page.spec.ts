import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopsPage } from './shops-page';

describe('ShopsPage', () => {
  let component: ShopsPage;
  let fixture: ComponentFixture<ShopsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ShopsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
