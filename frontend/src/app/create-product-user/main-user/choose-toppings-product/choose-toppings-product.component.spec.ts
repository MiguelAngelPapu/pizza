import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseToppingsProductComponent } from './choose-toppings-product.component';

describe('ChooseToppingsProductComponent', () => {
  let component: ChooseToppingsProductComponent;
  let fixture: ComponentFixture<ChooseToppingsProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseToppingsProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseToppingsProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
