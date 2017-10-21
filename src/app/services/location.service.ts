import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { SessionStorageService } from './session-storage.service';

@Injectable()
export class LocationService {

  constructor(
    private router: Router,
    private sessionStorage: SessionStorageService
  ) {}

  // original navigate method
  go(commands: any[]) {
    this.router.navigate(commands);
  }

  // navigate with data, use router url as key
  travel(commands: any[], data: any) {
    this.sessionStorage.set(commands[0], data);
    this.router.navigate(commands);
  }

  get(): any {
    return this.sessionStorage.get(this.router.url);
  }
}