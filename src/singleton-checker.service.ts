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
        console.log(`%c🔥 RUNTIME %cSingleton Checker: %cclass %c${instance.className} %cnow has %c${instance.numberOfInstances} %cinstances running!`, 
          'color:#005cc5; background: #f6f8fa; font-size: 12px; padding: 16px 0 16px 16px;', 
          'color:#e36209; background: #f6f8fa; font-size: 12px; padding: 16px 0;', 
          'color:#d73a49; background: #f6f8fa; font-size: 12px; padding: 16px 0;',
          'color:#e36209; background: #f6f8fa; font-size: 12px; padding: 16px 0;', 
          'color:#24292e; background: #f6f8fa; font-size: 12px; padding: 16px 0;', 
          'color:#005cc5; background: #f6f8fa; font-size: 12px; padding: 16px 0;', 
          'color:#24292e; background: #f6f8fa; font-size: 12px; padding: 16px 16px 16px 0;', 
          );
      }
    });
  }

}
