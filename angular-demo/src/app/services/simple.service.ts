import { Injectable } from '@angular/core';
import { singletonChecker } from '../../../../src/singleton-checker.decorator';

@singletonChecker
@Injectable()
export class SimpleService {

  // A Class property can be accessed by public
  public simpleServiceId;

  constructor() {
    // Assign an unique string to simpleServiceId everytime when constructor function is invoked
    this.simpleServiceId = this.makeid();
  }

  /**
   * A helper function generate unique ramdon string
   */
  private makeid(): string {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }
}
