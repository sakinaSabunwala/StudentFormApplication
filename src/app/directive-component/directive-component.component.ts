import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-component',
  template: `<h1>List of students</h1>
  <hr>
  <div class="claimedTable" style="background-color: #ffffff; color: black;">
      <table class="table">
          <thead>
              <tr>
                  <th>first name </th>
                  <th>last name </th>
                  <th>college name </th>
                  <th>roll number </th>
                  <th>address </th>
                  <th>Full Name</th>
              </tr>
          </thead>
          <tbody>
              <tr *ngFor="let stu of student1;let i = index">
                  <td>{{stu.Fname}}</td>
                  <td>{{stu.Lname}}</td>
                  <td>{{stu.Cllgname}}</td>
                  <td>{{stu.Rollno}}</td>
                  <td>{{stu.Address}}</td>
                  <input type="text" appStuDirective  [value]="stu.Fname  +  stu.Lname">
                  <td><button class="btn btn-primary" (click)="onSelect(stu)">Edit</button></td>
                  <td><button class="btn btn-primary" (click)="onDelete(i)">delete</button></td>
              </tr>
          </tbody>
  
  
      </table>
  </div>`,
  styleUrls: ['./directive-component.component.scss']
})
export class DirectiveComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
