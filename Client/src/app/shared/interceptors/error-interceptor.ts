import { ServerErrorService } from '../services/server-error.service';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    private serverErrorService;
    constructor(private injector: Injector) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            tap(result => {
                this.serverErrorService = this.injector.get(ServerErrorService);
                this.serverErrorService.clearError();
            })).pipe(
            catchError(error => {
                this.serverErrorService = this.injector.get(ServerErrorService);
                console.log('error intercepted');
                console.log(error);
                console.log(error.error.message);
                const errorKey = error.error.message;
                console.log(errorKey);
                if (errorKey !== undefined) {
                    this.serverErrorService.setError(error.error.message);
                }
                return Observable.throw(error);
            }));
    }

}
