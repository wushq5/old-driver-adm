import { Component } from '@angular/core';

import { CgiService } from './services/cgi.service';
import { LocationService } from './services/location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  constructor(
    private cgi: CgiService,
    private location: LocationService
  ) { }

  goHome() {
    this.location.go(['/favourites']);
  }

  goUploadTeacher() {
    this.location.go(['/uploadTeacher']);
  }
}
