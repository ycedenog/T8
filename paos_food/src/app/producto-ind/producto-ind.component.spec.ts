import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoIndComponent } from './producto-ind.component';

describe('ProductoIndComponent', () => {
  let component: ProductoIndComponent;
  let fixture: ComponentFixture<ProductoIndComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductoIndComponent]
    });
    fixture = TestBed.createComponent(ProductoIndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
