import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToppingProductComponent } from './topping-product.component';

describe('ToppingProductComponent', () => {
  let component: ToppingProductComponent;
  let fixture: ComponentFixture<ToppingProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToppingProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToppingProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
