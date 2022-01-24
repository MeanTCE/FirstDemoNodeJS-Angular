import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBeComponent } from './footer-be.component';

describe('FooterBeComponent', () => {
  let component: FooterBeComponent;
  let fixture: ComponentFixture<FooterBeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterBeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterBeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
