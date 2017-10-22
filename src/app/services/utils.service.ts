import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {
  
  getDate(dateStr: string): string {
    let date = new Date(dateStr);
    return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
  }
}