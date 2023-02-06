import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('el interceptor paso añadio el token');
    const headers = new HttpHeaders({
      'token':
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEwLCJ1c2VyIjoiamltbWllX2siLCJpYXQiOjE2NzU2OTQxOTd9.QrcE_6HmOHRC0NmBLKybwJC7hVeEWi5BBC2bZ3VDFK4',
    });
    const reqClone = req.clone({
      headers
    })
    return next.handle(reqClone);
  }
}
