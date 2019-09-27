import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {
  t1:FormGroup

  constructor(private http:HttpClient,private route:Router) {
    this.t1=new FormGroup({
      UserId:new FormControl(''),
      Id:new FormControl(''),
      Title:new FormControl(''),
      Completed:new FormControl('')
    })
   }

  ngOnInit() {

  }
  t2(b)
  {
    let data1={
      userId:b.UserId,
      id:b.Id,
      title:b.Title,
      completed:b.Completed
    }
    this.http.post("https://jsonplaceholder.typicode.com/todos",data1).subscribe(data => {
      console.log(data)
      this.route.navigateByUrl("tasks")
    })
  }
 
}
