import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusSelectionContainer } from './campus-selection.container';

describe('CampusSelectionComponent', () => {
  let component: CampusSelectionContainer;
  let fixture: ComponentFixture<CampusSelectionContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CampusSelectionContainer],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampusSelectionContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
