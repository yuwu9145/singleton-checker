import { SingletonCheckerService } from './singleton-checker.service';

export function singletonChecker<T>(constructor: any): any {

  const originalConstructor = constructor;

  // tslint:disable-next-line:only-arrow-functions
  const newConstructor = function(...args: any[]): any {
    const singletonCheckerService = SingletonCheckerService.Instance;
    singletonCheckerService.checkConstructor(originalConstructor.name);
    return new originalConstructor(...args);
  }

  newConstructor.prototype = originalConstructor.prototype;

  return newConstructor;
}
