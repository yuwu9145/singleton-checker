interface ExistingInstance {
  className: string;
  numberOfInstances: number;
}

export class SingletonCheckerService {

  private static instance: SingletonCheckerService | undefined = undefined;

  private runningInstances: ExistingInstance[] = [];

  constructor() {}

  public static get Instance(): SingletonCheckerService {
    return this.instance || (this.instance = new this());
  }

  public checkConstructor(className: string): void {
    const existingInstance: ExistingInstance | undefined = this.runningInstances.find(instance => instance.className === className);
    if (existingInstance) {
      existingInstance.numberOfInstances ++;
    } else {
      this.runningInstances.push({
        className,
        numberOfInstances: 1
      });
    }
    this.logMultipleInstances();
  }

  private logMultipleInstances(): void {
    this.runningInstances.forEach(instance => {
      if (instance.numberOfInstances > 1) {
        console.log(`%cSingleton Checker In RUNTIME: class ${instance.className} now has ${instance.numberOfInstances} instances!`, 'color:red' );
      }
    });
  }

}
