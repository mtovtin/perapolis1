import { trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { animations, buildRouteTransition } from 'ngx-animations'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimation', [
      buildRouteTransition({
        stateChangeExpr: '* => *', 

        enter: animations.fadeIn(400),
        leave: animations.fadeOut(400),
      }),
    ]),
  ],
})
export class AppComponent {}