import { Component }   from '@angular/core';
import { StarService } from '../star-service/star.service';


@Component({
  template: `
    <router-outlet></router-outlet>
  `,
  providers: [ StarService ]
})
export class StarsComponent {
  userName = '';
  constructor(starSrv: StarService) {
  }
}

