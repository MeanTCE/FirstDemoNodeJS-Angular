import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeLayoutComponent } from './fe-layout.component';

describe('FeLayoutComponent', () => {
  let component: FeLayoutComponent;
  let fixture: ComponentFixture<FeLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
