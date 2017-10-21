import { Injectable } from '@angular/core';

@Injectable()
export class SessionStorageService {

  set(key: string, value: any) {
    if (!key) return;
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string): any {
    if (!key) return;
    return JSON.parse(sessionStorage.getItem(key));
  }

  remove(key: string) {
    if (!key) return;
    sessionStorage.removeItem(key);
  }

}