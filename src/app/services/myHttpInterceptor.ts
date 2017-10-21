import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
  private token: string;
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let newReq = req.clone();
    if (this.token) {
      newReq = req.clone({ headers: req.headers.set('Authorization', this.token) });
    }

    return next
      .handle(newReq)
      .do(event => {
        if (event instanceof HttpResponse) {
          if (/token$/.test(event.url) && event.body.token) {
            console.info('[HttpInterceptor] set authorization success');
            this.token = event.body.token;
          }
        }
      });
  }
}