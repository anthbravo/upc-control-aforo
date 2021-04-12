import { Component, OnInit } from '@angular/core';
import { ScreensOption } from '@core/options/screens.option';
import { VisitedScreenState } from '@core/states/visited-screen.state';
import { Subscription } from 'rxjs';

@Component({
  selector: 'upc-visited-screens',
  templateUrl: './visited-screens.component.html',
  styleUrls: ['./visited-screens.component.scss'],
})
export class VisitedScreensComponent implements OnInit {
  visitedScreens: string[];
  screensSubscription$: Subscription;

  constructor(private visitedScreenState: VisitedScreenState) {
    this.screensSubscription$ = this.visitedScreenState.subscribeVisitedScreens(
      (newVisitedScreens: string[]) => {
        this.visitedScreens = newVisitedScreens;
      }
    );
  }

  ngOnInit(): void {
    this.visitedScreenState.changeVisitedScreens(ScreensOption.CAMPUS);
  }
}
