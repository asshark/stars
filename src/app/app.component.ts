import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
        private location: Location
  ) { }

  title = 'Sharks Stars';

  value = '';
  searchBy(value: string) { 
    this.value = value; 
    location.assign('/StarSearchComponent:dsssss');
    ////"../node_modules/tether/dist/js/tether.js",
  }

}
