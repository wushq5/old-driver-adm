import { Component, OnInit } from '@angular/core';

import { CgiService } from '../../services/cgi.service';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'uploadHomework',
  templateUrl: './uploadHomework.component.html',
  styleUrls: ['./uploadHomework.component.css']
})
export class UploadHomeworkComponent implements OnInit {
  public id: string;
  public name: string;
  public desc: string;
  public cover: File;
  private teacher_id: string;
  private teacher_name: string;

  constructor(
    private cgi: CgiService,
    private location: LocationService
  ) { }

  ngOnInit(): void {
    let teacher = this.location.get();
    this.teacher_id = teacher._id;
    this.teacher_name = teacher.name;
  }

  onChange () {
    let ele: any;
    ele = document.querySelector('#photo');
    this.cover = ele.files[0];

    let url = window.URL.createObjectURL(this.cover);
    let imgPre: any;
    imgPre = document.querySelector('#imgPre');
    imgPre.src = url;
  }

  upload() {
    let data = new FormData();
    data.append('id', this.id);
    data.append('name', this.name);
    data.append('desc', this.desc);
    data.append('cover', this.cover);
    data.append('teacher_id', this.teacher_id);
    data.append('teacher_name', this.teacher_name);

    this.cgi.uploadHomework(data).then(res => {
      this.location.go(['/teacher']);
    })
  }
}