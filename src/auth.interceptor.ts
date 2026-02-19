import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  let token = localStorage.getItem('token');

  if (token) {
        token = token.trim(); // remove spaces/newlines

    // Optional: remove non-ASCII characters
    token = token.replace(/[^\x00-\x7F]/g, "");
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(authReq);
  }

  return next(req);
};
