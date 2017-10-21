import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { CgiService } from '../../services/cgi.service';
import { LocationService } from '../../services/location.service';

import { Teacher } from '../../models/teacher';
import { Homework } from '../../models/homework';

@Component({
  selector: 'teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit { 
  teacher: Teacher;
  homeworks: Homework[];

  constructor(
    private cgi: CgiService,
    private location: LocationService
  ) { }

  ngOnInit(): void {
    this.teacher = this.location.get();

    this.cgi.getHomeworkByTeacherId({teacherId: this.teacher._id}).then(res => {
      this.homeworks = res;
    });
  }

  getDate(dateStr: string): string {
    let date = new Date(dateStr);
    return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
  }
}
