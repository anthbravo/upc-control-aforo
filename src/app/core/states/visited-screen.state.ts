import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ScreensOption } from '../options/screens.option';

@Injectable({
  providedIn: 'root',
})
export class VisitedScreenState {
  private visitedScreens = new BehaviorSubject<string[]>([]);

  constructor() {}

  changeVisitedScreens(visitedScreen: string) {
    if (this.visitedScreens) {
      if (this.visitedScreens.value.length == 0) {
        this.visitedScreens.next([visitedScreen]);
      } else {
        let newVisitedScreens = [
          ...this.visitedScreens.value,
          ScreensOption.SEPARATE,
          visitedScreen,
        ];
        this.visitedScreens.next([visitedScreen]);
      }
    }
  }

  subscribeVisitedScreens(work: (value: string[]) => void) {
    return this.visitedScreens.subscribe(work);
  }
}
