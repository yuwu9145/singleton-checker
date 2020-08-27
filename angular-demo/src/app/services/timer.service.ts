import { timer, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { singletonChecker } from '../../../../src/singleton-checker.decorator';

@singletonChecker
@Injectable()
export class TimerService {

  public timerSource$: Observable<any>;

  constructor() {
    this.timerSource$ = timer(1000, 1000);
  }

}
