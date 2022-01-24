import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterFeComponent } from './footer-fe.component';

describe('FooterFeComponent', () => {
  let component: FooterFeComponent;
  let fixture: ComponentFixture<FooterFeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterFeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterFeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
