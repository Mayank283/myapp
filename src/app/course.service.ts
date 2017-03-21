import { Injectable } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Course} from './course'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CourseService {
  
  private courseUrl = 'http://localhost:8080/course/list';

  constructor(private http: Http) { }

  // getCourseList(): Course{
  //   return {
  //             courseName: "SpringBoot"
  //           };

      getCourseList(): Observable<Course> {
      // getCourseList(): Promise<Course> {
      //   console.log(this.http.get(this.courseUrl).toPromise());
      //     return this.http.get(this.courseUrl)
      //     .toPromise()
      //     .then(Response => Response.json().data as Course)
      //     .catch(this.handleError);

      return this.http.get(this.courseUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
}

//   private handleError(error: any): Promise<any> {
//     console.error('An error occurred', error); // for demo purposes only
//     return Promise.reject(error.message || error);
// }

  private extractData(res: Response) {
    return res.json();
    //  let body = res.json();
    //  return body.data || { };
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