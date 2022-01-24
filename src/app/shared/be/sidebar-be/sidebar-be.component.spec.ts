import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarBeComponent } from './sidebar-be.component';

describe('SidebarBeComponent', () => {
  let component: SidebarBeComponent;
  let fixture: ComponentFixture<SidebarBeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarBeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarBeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
