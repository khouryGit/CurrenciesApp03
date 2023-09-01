import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const isApiRequest = request.url.startsWith('https://api.fastforex.io/currencies?');

    if (isApiRequest) {
      request = request.clone({
        setParams: {
          'api_key': 'bcbb2c516c-431d3332df-s0b93c'
        }
      });
    }

    return next.handle(request);
  }
}