import { Component, OnInit } from '@angular/core';
import {CourseService} from './course.service';
import { Course } from './course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  providers: [CourseService]
})

export class CourseComponent implements OnInit {

  //private course: Course = new Course();
  private course: Map<string,string> = new Map;
  errorMessage: string;

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.getCourseList();
  }

  getCourseList(){
    this.courseService.getCourseList()
                      // .then(
                      //         Course => this.course = Course,
                      //         error =>  this.errorMessage = <any>error);
                      .subscribe(
                       course => this.course = course,
                       error =>  this.errorMessage = <any>error
                       );
  }
}