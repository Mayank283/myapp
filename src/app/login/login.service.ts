import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


/**Import custom classes*/
import { User } from '../signup/user';

@Injectable()
export class LoginService {


  private loginUrl = 'http://localhost:8080/login';

  constructor(private http: Http) { }

  login(user: User): Observable<User> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log("It works");
    console.log(user);
    return this.http.post(this.loginUrl, user)
      .map(this.extractData)
      .catch(this.handleError);
  }
  
  private extractData(res: Response) {
    console.log(res.json());
    return res.json();
  }
  
  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}