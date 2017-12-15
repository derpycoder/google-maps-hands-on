import { Component } from '@angular/core';

@Component({
  selector: 'ak-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
      <h1 class="jumbotron">
        {{title}}!
      </h1>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'Google Maps Hands On';
}
