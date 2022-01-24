import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeLayoutComponent } from './be-layout.component';

describe('BeLayoutComponent', () => {
  let component: BeLayoutComponent;
  let fixture: ComponentFixture<BeLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
