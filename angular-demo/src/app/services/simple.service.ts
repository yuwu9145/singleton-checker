import { Injectable } from '@angular/core';
import { singletonChecker } from '../../../../src/singleton-checker.decorator';
import { HttpClient } from  '@angular/common/http';

@singletonChecker
@Injectable()
export class SimpleService {

  // publicly accessible property
  public simpleServiceId;

  constructor(
    private httpClient: HttpClient
  ) {
    this.httpClient.get('');
    // assign an unique string to simpleServiceId everytime when constructor function is invoked
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
