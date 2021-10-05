import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbouthimComponent } from './abouthim.component';

describe('AbouthimComponent', () => {
  let component: AbouthimComponent;
  let fixture: ComponentFixture<AbouthimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbouthimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbouthimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
