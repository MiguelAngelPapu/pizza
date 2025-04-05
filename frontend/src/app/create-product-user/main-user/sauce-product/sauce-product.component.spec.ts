import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SauceProductComponent } from './sauce-product.component';

describe('SauceProductComponent', () => {
  let component: SauceProductComponent;
  let fixture: ComponentFixture<SauceProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SauceProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SauceProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
