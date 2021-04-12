import { TestBed } from '@angular/core/testing';
import { VisitedScreenState } from './visited-screen.state';

describe('RoutesStateService', () => {
  let service: VisitedScreenState;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitedScreenState);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
