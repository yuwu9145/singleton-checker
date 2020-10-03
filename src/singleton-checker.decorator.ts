import { SingletonCheckerService } from './singleton-checker.service';

export function singletonChecker<T extends { new(...args: any[]): {} }>(constructor: any): any {

  return class extends constructor {
    constructor(...args) {
      super(...args);
      const singletonCheckerService = SingletonCheckerService.Instance;
      singletonCheckerService.checkConstructor(constructor.name);
    } 
  };
}
