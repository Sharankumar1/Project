import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts1: any;

  constructor(private http:HttpClient,private route:Router) { }

  ngOnInit() {
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(data => {
      this.posts1 = data
      console.log(data)
    })
  }
  p1(b) {
    localStorage.setItem("userdata", JSON.stringify(b))
    this.route.navigateByUrl('posts1')
  }
}
