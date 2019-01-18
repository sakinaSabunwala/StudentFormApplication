import { Injectable } from '@angular/core';
import { stuArray } from './studentArray'
import { StudentData } from './studentData'
import { Observable } from 'rxjs';
import { stuJson } from './studentArray';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StuService {

  constructor(private http: HttpClient) {

  }

  getStudent() {
    return stuJson;
  }
}
