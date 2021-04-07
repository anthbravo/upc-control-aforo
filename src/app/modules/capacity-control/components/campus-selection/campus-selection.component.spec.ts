import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusSelectionComponent } from './campus-selection.component';

describe('CampusSelectionComponent', () => {
  let component: CampusSelectionComponent;
  let fixture: ComponentFixture<CampusSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampusSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampusSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
