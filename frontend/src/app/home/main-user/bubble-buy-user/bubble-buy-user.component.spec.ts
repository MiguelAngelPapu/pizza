import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleBuyUserComponent } from './bubble-buy-user.component';

describe('BubbleBuyUserComponent', () => {
  let component: BubbleBuyUserComponent;
  let fixture: ComponentFixture<BubbleBuyUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BubbleBuyUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BubbleBuyUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
