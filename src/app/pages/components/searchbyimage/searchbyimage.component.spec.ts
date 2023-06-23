import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbyimageComponent } from './searchbyimage.component';

describe('SearchbyimageComponent', () => {
  let component: SearchbyimageComponent;
  let fixture: ComponentFixture<SearchbyimageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchbyimageComponent]
    });
    fixture = TestBed.createComponent(SearchbyimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
