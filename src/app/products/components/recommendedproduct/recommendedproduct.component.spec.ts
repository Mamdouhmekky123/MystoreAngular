import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedproductComponent } from './recommendedproduct.component';

describe('RecommendedproductComponent', () => {
  let component: RecommendedproductComponent;
  let fixture: ComponentFixture<RecommendedproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecommendedproductComponent]
    });
    fixture = TestBed.createComponent(RecommendedproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
