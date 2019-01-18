import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentComponent} from './student/student.component'
import { StudentListComponent} from './student-list/student-list.component'


const routes: Routes = [
  {path: '', redirectTo: 'student-list', pathMatch: 'full'},
  {path : 'student List' , component : StudentListComponent},
  {path :'Add Student', component:StudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
