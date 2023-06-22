import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglecommentComponent } from './singlecomment.component';

describe('SinglecommentComponent', () => {
  let component: SinglecommentComponent;
  let fixture: ComponentFixture<SinglecommentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SinglecommentComponent]
    });
    fixture = TestBed.createComponent(SinglecommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
