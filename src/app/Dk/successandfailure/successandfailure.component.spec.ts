import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessandfailureComponent } from './successandfailure.component';

describe('SuccessandfailureComponent', () => {
  let component: SuccessandfailureComponent;
  let fixture: ComponentFixture<SuccessandfailureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessandfailureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessandfailureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
