import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutherComponent } from './abouther.component';

describe('AboutherComponent', () => {
  let component: AboutherComponent;
  let fixture: ComponentFixture<AboutherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
