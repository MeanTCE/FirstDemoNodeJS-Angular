import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFeComponent } from './header-fe.component';

describe('HeaderFeComponent', () => {
  let component: HeaderFeComponent;
  let fixture: ComponentFixture<HeaderFeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderFeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderFeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
