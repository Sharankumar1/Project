import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  album1: Object;

  constructor(private http:HttpClient,private route:Router) { }

  ngOnInit() {
    this.http.get("https://jsonplaceholder.typicode.com/photos").subscribe(data => {
      this.album1 = data
      console.log(data)
    })
  }
  a1(b) {
    localStorage.setItem("userdata", JSON.stringify(b))
    this.route.navigateByUrl('album1')
  }

}
