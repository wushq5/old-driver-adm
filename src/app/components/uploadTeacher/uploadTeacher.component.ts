import { Component } from '@angular/core';

import { CgiService } from '../../services/cgi.service';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'uploadTeacher',
  templateUrl: './uploadTeacher.component.html',
  styleUrls: ['./uploadTeacher.component.css']
})
export class UploadTeacherComponent {
  public name: string;
  public desc: string;
  public birthday: string;
  public height: string;
  public weight: string;
  public bwh: string;
  public photo: any;

  constructor(
    private cgi: CgiService,
    private location: LocationService
  ) { }

  onChange () {
    let ele: any;
    ele = document.querySelector('#photo');
    this.photo = ele.files[0];

    let url = window.URL.createObjectURL(this.photo);
    let imgPre: any;
    imgPre = document.querySelector('#imgPre');
    imgPre.src = url;
  }

  upload() {
    let data = new FormData();
    data.append('name', this.name);
    data.append('desc', this.desc);
    data.append('birthday', this.birthday);
    data.append('height', this.height);
    data.append('weight', this.weight);
    data.append('bwh', this.bwh);
    data.append('photo', this.photo);

    this.cgi.uploadTeacher(data).then(res => {
      this.location.go(['/favourites']);
    })
  }
}
