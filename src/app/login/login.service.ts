import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Md5 } from 'ts-md5/dist/md5';

/**Import custom classes*/
import { User } from '../signup/user';

@Injectable()
export class LoginService {

  private loginUrl = 'http://localhost:8080/login';

  constructor(private http: Http,
    private _md5: Md5) { }

  login(user: User): Observable<User> {
    //let urlSearchParams = new URLSearchParams();
    //urlSearchParams.append('username', user.username);
    //urlSearchParams.append('password', user.password);
    let body = user.username;
    // let username: string = user.username;
    let password: string = user.password;
    let e: string = Md5.hashStr(password).toString();
    let headers = new Headers({ 'Content-Type': 'application/json' });
    // headers.append("Authorization", "Basic " + btoa(username + ":" + password));
    headers.append("Authorization", e);
    // headers.append("From",username);
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.loginUrl, body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    console.log(res.json());
    return res.json();
  }

  private handleError(error: Response | any) {
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