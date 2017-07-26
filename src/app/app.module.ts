/*Import All the required Modules*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { RoutingModule } from './routing/routing.module';
import { LocationStrategy, PathLocationStrategy, HashLocationStrategy,APP_BASE_HREF } from '@angular/common';

/*Import all the required Component */
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MapValuesPipePipe } from './map-values-pipe.pipe';

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
    LoginComponent,
    MapValuesPipePipe
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
