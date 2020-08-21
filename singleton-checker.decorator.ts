import { SingletonCheckerService } from './singleton-checker.service';

export function singletonChecker(constructor: Function) {
  const singletonCheckerService = SingletonCheckerService.Instance;
  singletonCheckerService.checkConstructor(constructor.name);
  console.log('----singletonChecker------', constructor)
}
