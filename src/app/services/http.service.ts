import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {
  private base_url: string;

  constructor(private http: HttpClient) {

    // set base url
    if (/^localhost/.test(location.host)) {
      this.base_url = 'http://localhost:3000';
    } else {
      this.base_url = 'https://rcrab.top';
    }
  }

  get() {}
}