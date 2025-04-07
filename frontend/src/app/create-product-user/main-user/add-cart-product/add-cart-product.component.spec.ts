import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCartProductComponent } from './add-cart-product.component';

describe('AddCartProductComponent', () => {
  let component: AddCartProductComponent;
  let fixture: ComponentFixture<AddCartProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCartProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCartProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
