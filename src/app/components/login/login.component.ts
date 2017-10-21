import { Component } from '@angular/core';

import { CgiService } from '../../services/cgi.service';
import { LocationService } from '../../services/location.service';
import { CacheService } from '../../services/cache.service';
import CONST from '../../const';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public username: string;
  public password: string;

  constructor(
    private cgi: CgiService,
    private location: LocationService,
    private cache: CacheService
  ) { }

  login(): void {
    this.cgi.doLogin({
      username: this.username,
      password: this.password
    }).then(res => {
      this.location.go(['/favourites']);
      this.cache.set(CONST.CACHE.LOGIN_STATUS, true);
    })
  }
}
