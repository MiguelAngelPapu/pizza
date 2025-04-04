import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrustProductComponent } from './crust-product.component';

describe('CrustProductComponent', () => {
  let component: CrustProductComponent;
  let fixture: ComponentFixture<CrustProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrustProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrustProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
