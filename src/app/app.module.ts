/*Import All the required Modules*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { RoutingModule } from './routing/routing.module';

/*Import all the required Component */
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { SignupComponent } from './signup/signup.component';
import { MyPipePipe } from './my-pipe.pipe';
import { LoginComponent } from './login/login.component';

@NgModule({
  /**imports is for Module*/
    imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  /**Declaration is for components*/
  declarations: [
    AppComponent,
    CourseComponent,
    SyllabusComponent,
    SignupComponent,
    MyPipePipe,
    LoginComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
