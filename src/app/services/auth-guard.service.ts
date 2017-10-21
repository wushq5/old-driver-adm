import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import CONST from '../const';
import { CacheService } from './cache.service';
import { LocationService } from './location.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private cache: CacheService,
    private location: LocationService
    ) {}

  canActivate(): boolean {
    if (!this.cache.get(CONST.CACHE.LOGIN_STATUS)) {
      console.info('[AuthGuard] redirect to Login');
      this.location.go(['/login']);
      return false;
    }

    console.info('[AuthGuard] already login');
    return true;
  }
}