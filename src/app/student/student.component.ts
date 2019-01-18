import { Component, OnInit } from '@angular/core';
import { StudentData } from '../studentData';
import { FormGroup } from '@angular/forms'
import { stuArray, stuJson } from '../studentArray';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  students = stuArray;
  student1;
  stu = stuJson;

  fname: string;
  lname: string;
  cllgname: string;
  rollno: string;
  address: string;


  stuData = new StudentData("sakina", "sabunwala", "gits", "15egics073", "dhvfhnv");
  submitted = false;

  onSubmit(studentForm) {
    this.submitted = true;

    this.student1 = studentForm.value;

    this.fname = this.student1.fname;
    this.lname = this.student1.lname;
    this.cllgname = this.student1.cllgname;
    this.rollno = this.student1.rollno;
    this.address = this.student1.address;

    this.students.push(this.student1);


    this.stu.push({ Fname: this.fname, Lname: this.lname, Cllgname: this.cllgname, Rollno: this.rollno, Address: this.address });


  }



  constructor() { }

  ngOnInit() {
  }

}
