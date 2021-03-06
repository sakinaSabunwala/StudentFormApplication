import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { FormsModule }   from '@angular/forms';
import { StudentListComponent } from './student-list/student-list.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StuDirectiveDirective } from './stu-directive.directive';
import { DirectiveComponentComponent } from './directive-component/directive-component.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentListComponent,
    StuDirectiveDirective,
    DirectiveComponentComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
