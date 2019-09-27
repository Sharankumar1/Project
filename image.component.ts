import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  img:any

  constructor() { }

  ngOnInit() {
    this.img=JSON.parse(localStorage.getItem("userdata"))
  }
}
