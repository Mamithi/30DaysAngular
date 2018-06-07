import { Injectable } from '@angular/core';

import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest
}
    from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class Interceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Http request has been intercepted');
        return next.handle(req);
    }
}