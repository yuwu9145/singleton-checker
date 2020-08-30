# AngularDemo

This Angular project demonstrates how multiple instances are generated from a service class when using lazy loading strategy.

(This is a very common mistake that could be made by team members who do not fully understand how does Dependency Injection work in Angular framework)

### Project Overview


1. Create two feature modules (**CustomersModule** & **OrdersModule**)
2. Declare lazy-loaded routes for these two feature modules respectively in **AppRoutingModule** 
  ```js
const routes: Routes = [
  {
    path: 'customers',
    loadChildren: () =>
      import('./customers/customers.module').then((m) => m.CustomersModule),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./orders/orders.module').then((m) => m.OrdersModule),
  },
];
```
3. Create a simple service class **SimpleService**. This service exposes a public property **simpleServiceId** which is assigned an unique id string when the constructor function is invoked.
  ```js
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
```
