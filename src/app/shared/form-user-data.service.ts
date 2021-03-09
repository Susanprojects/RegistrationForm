import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormUserDataService {

  url: string = 'https://demo-api.now.sh/users';
  constructor(private httpclient: HttpClient) { }

  sendFormData(formUserData: any): Observable<any> {
    return this.httpclient.post<any>(this.url, formUserData)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: any) {
    return throwError(error.message || "Server error");
  }
}
