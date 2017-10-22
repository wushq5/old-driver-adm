import { Component, OnInit } from '@angular/core';

import { CgiService } from '../../services/cgi.service';
import { LocationService } from '../../services/location.service';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'updateTeacher',
  templateUrl: './updateTeacher.component.html',
  styleUrls: ['./updateTeacher.component.css']
})
export class UpdateTeacherComponent implements OnInit {
  public name: string;
  public desc: string;
  public birthday: string;
  public height: string;
  public weight: string;
  public bwh: string;
  public photo: any;
  private _id: string;

  constructor(
    private cgi: CgiService,
    private location: LocationService,
    private utils: UtilsService
  ) { }

  ngOnInit(): void {
    let teacher = this.location.get();
    for (let key in teacher) {
      this[key] = teacher[key];
    }

    this.birthday = this.utils.getDate(this.birthday);

    let imgPre: any;
    imgPre = document.querySelector('#imgPre');
    imgPre.src = teacher.photo;
  }

  onChange () {
    let ele: any;
    ele = document.querySelector('#photo');
    this.photo = ele.files[0];

    let url = window.URL.createObjectURL(this.photo);
    let imgPre: any;
    imgPre = document.querySelector('#imgPre');
    imgPre.src = url;
  }

  update() {
    let data = new FormData();
    data.append('name', this.name);
    data.append('desc', this.desc);
    data.append('birthday', this.birthday);
    data.append('height', this.height);
    data.append('weight', this.weight);
    data.append('bwh', this.bwh);
    data.append('photo', this.photo);
    data.append('_id', this._id);

    this.cgi.updateTeacher({teacherId: this._id}, data).then(res => {
      this.location.go(['/favourites']);
    })
  }
}
