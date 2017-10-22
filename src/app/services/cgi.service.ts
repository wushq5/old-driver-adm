import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

import { Teacher } from '../models/teacher';
import { Homework } from '../models/homework';

@Injectable()
export class CgiService {

  private prefix: string;

  constructor(private http: HttpClient) { 

    let host = window.location.host;
    if (/^localhost/.test(host)) {
      this.prefix = 'http://localhost:3000';
    } else {
      this.prefix = 'https://rcrab.top';
    }
  }

  getTeachers(): Promise<Teacher[]> {
    return this.http.get(`${this.prefix}/teachers`)
              .toPromise()
              .then(res => res as Teacher[])
              .catch(this.handleError);
  }

  getHomeworkByTeacherId(urlParams): Promise<Homework[]> {
    return this.http.get(`${this.prefix}/teachers/${urlParams.teacherId}/homeworks`)
              .toPromise()
              .then(res => res as Homework[])
              .catch(this.handleError);
  }

  doLogin(data): Promise<any> {
    let body = {
      name: data.username,
      password: data.password
    }
    return this.http.post(`${this.prefix}/user/token`, body)
              .toPromise()
              .then(res => res)
              .catch(this.handleError);
  }

  uploadTeacher(data): Promise<any> {
    return this.http.post(`${this.prefix}/teachers`, data)
              .toPromise()
              .then(res => res)
              .catch(this.handleError);
  }

  uploadHomework(data): Promise<any> {
    return this.http.post(`${this.prefix}/teachers/homeworks`, data)
              .toPromise()
              .then(res => res)
              .catch(this.handleError);
  }

  updateTeacher(urlParams, data): Promise<any> {
    return this.http.put(`${this.prefix}/teachers/${urlParams.teacherId}`, data)
              .toPromise()
              .then(res => res)
              .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}