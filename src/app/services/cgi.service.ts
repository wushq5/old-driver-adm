import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

import { Teacher } from '../models/teacher';
import { Homework } from '../models/homework';

@Injectable()
export class CgiService {

  constructor(private http: HttpClient) { }

  getTeachers(): Promise<Teacher[]> {
    return this.http.get('http://localhost:3000/teachers')
              .toPromise()
              .then(res => res as Teacher[])
              .catch(this.handleError);
  }

  getHomeworkByTeacherId(urlParams): Promise<Homework[]> {
    return this.http.get(`http://localhost:3000/teachers/${urlParams.teacherId}/homeworks`)
              .toPromise()
              .then(res => res as Homework[])
              .catch(this.handleError);
  }

  doLogin(data): Promise<any> {
    let body = {
      name: data.username,
      password: data.password
    }
    return this.http.post(`http://localhost:3000/user/token`, body)
              .toPromise()
              .then(res => res)
              .catch(this.handleError);
  }

  uploadTeacher(data): Promise<any> {
    return this.http.post(`http://localhost:3000/teachers`, data)
              .toPromise()
              .then(res => res)
              .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}