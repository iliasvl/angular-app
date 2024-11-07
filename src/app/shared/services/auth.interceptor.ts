import { 
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler){
    const authToken = localStorage.getItem('access_token')
    if (!authToken) {
      return next.handle(req)
    }

    const authRequest = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + authToken)
    });

    return next.handle(authRequest);
  }
}

//Αυτός ο κώδικας είναι στανταρ και μπορεί να χρησιμοποιηθεί ολόιδιος προκειμένου να δημιουργήσουμε έναν interceptor για να στέλνει jwttoken στη σελίδα πριν φτάσει το αίτημα.