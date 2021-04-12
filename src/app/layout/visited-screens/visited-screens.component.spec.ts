import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitedScreensComponent } from './visited-screens.component';

describe('VisitedScreensComponent', () => {
  let component: VisitedScreensComponent;
  let fixture: ComponentFixture<VisitedScreensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitedScreensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitedScreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
