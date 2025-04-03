import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductUserComponent } from './create-product-user.component';

describe('CreateProductUserComponent', () => {
  let component: CreateProductUserComponent;
  let fixture: ComponentFixture<CreateProductUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateProductUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProductUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
