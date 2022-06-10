import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductsBycategoryComponent } from './view-products-bycategory.component';

describe('ViewProductsBycategoryComponent', () => {
  let component: ViewProductsBycategoryComponent;
  let fixture: ComponentFixture<ViewProductsBycategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProductsBycategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProductsBycategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
