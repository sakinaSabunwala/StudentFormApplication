import { Component, OnInit } from '@angular/core';
import { stuArray, stuJson } from '../studentArray';
import { StuService } from '../stu.service'
import { StudentData } from '../studentData';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  selectindex;
  student = stuArray;
  student1;

  constructor(private studdentservice: StuService) { }

  getStudent(): void {
    this.student1 = this.studdentservice.getStudent();
  }

  onSelect(stu): void {
    this.selectindex = stu;

  }

  onDelete(i): void {
    console.log(i);

    if (window.confirm('are you sure'))
      this.student.splice(i, 1)

  }

  update(): void {
    this.selectindex = null;
  }

  ngOnInit() {
    this.getStudent();
  }


}

