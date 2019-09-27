import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts1',
  templateUrl: './posts1.component.html',
  styleUrls: ['./posts1.component.css']
})
export class Posts1Component implements OnInit {
  da:any
  postdata: any;
  comp=[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("https://jsonplaceholder.typicode.com/comments").subscribe(data => {
      this.postdata=data
    })
    this.da=JSON.parse(localStorage.getItem("userdata"))
    setTimeout(()=>{
      this.p11();
    },2000)
  }
  p11()
  {
    for(var i=0;i<this.postdata.length;i++)
    {
      if(this.da.userId==this.postdata[i].postId)
      {
        this.comp.push(this.postdata[i])
      }
    }
    console.log(this.comp)
  }
}
