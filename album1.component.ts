import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-album1',
  templateUrl: './album1.component.html',
  styleUrls: ['./album1.component.css']
})
export class Album1Component implements OnInit {
  albumdata:any
  da: any;
  comp=[];

  constructor(private http:HttpClient,private route:Router) { }

  ngOnInit() {
    this.http.get("https://jsonplaceholder.typicode.com/photos").subscribe(data => {
      this.albumdata=data
  })
  this.da=JSON.parse(localStorage.getItem("userdata"))
  setTimeout(()=>{
    this.p12();
  },2000)
  }
  p12()
  {
    for(var i=0;i<this.albumdata.length;i++)
    {
      if(this.da.userId==this.albumdata[i].albumId)
      {
        this.comp.push(this.albumdata[i])
      }
    }
    console.log(this.comp)
  }
  a11(a)
  {
    localStorage.setItem("userdata",JSON.stringify(a))
    this.route.navigateByUrl("image")
  }

}