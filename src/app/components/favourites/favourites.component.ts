import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { CgiService } from '../../services/cgi.service';
import { LocationService } from '../../services/location.service';

import { Teacher } from '../../models/teacher';

@Component({
  selector: 'favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit { 
  teachers: Teacher[] = [];

  constructor(
    private cgi: CgiService,
    private location: LocationService
  ) { }

  ngOnInit(): void {
    this.cgi.getTeachers().then(res => {
      this.teachers = res;
    });
  }

  goTeacher(teacher) {
    this.location.travel(['/teacher'], teacher);
  }
}
