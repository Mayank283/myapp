import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**To be used for better management of application
 * So just mention all the routes-path here
 */
import { CourseComponent } from '../course/course.component';
import { SyllabusComponent } from '../syllabus/syllabus.component';
import { SignupComponent } from '../signup/signup.component';
import { LoginComponent } from '../login/login.component';

const appRoutes: Routes = [
  { path: 'course', component: CourseComponent },
  { path: 'syllabus', component: SyllabusComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }