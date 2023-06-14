import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Node List</h1>
      <app-node-form></app-node-form>
      <app-node-list></app-node-list>
    </div>
  `,
})
export class AppComponent {}
