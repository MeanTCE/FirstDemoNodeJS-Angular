import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBeComponent } from './header-be.component';

describe('HeaderBeComponent', () => {
  let component: HeaderBeComponent;
  let fixture: ComponentFixture<HeaderBeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderBeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
