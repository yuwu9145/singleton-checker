import { Injectable } from '@angular/core';

interface ExistingInstance {
  className: string;
  numberOfInstances: number;
}

@Injectable()
export class SingletonCheckerService {

  private static instance: SingletonCheckerService | undefined = undefined;

  private runningInstances: Array<ExistingInstance> = [];

  constructor() {
    console.log('-----SingletonCheckerService---constructor--------');
  }

  public static get Instance (): SingletonCheckerService {
    return this.instance || (this.instance = new this());
  }

  public checkConstructor(className: string) {
    const existingInstance: ExistingInstance = this.runningInstances.find(instance => instance.className === className);
    if (existingInstance) {
      existingInstance.numberOfInstances ++;
    } else {
      this.runningInstances.push({
        className,
        numberOfInstances: 0
      });
    }
  }

  private logMultipleInstances() {
    this.runningInstances.forEach(instance => {
      if (instance.numberOfInstances) {
        console.log(`Singleton Checker: class ${instance.className} now has ${instance.numberOfInstances} instances!`);
      }
    });
  }

}
