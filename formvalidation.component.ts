import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl } from '@angular/forms'
import { unwrapResolvedMetadata } from '@angular/compiler';
import { Router } from '@angular/router';
import { NgStyle, FormStyle } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formvalidation',
  templateUrl: './formvalidation.component.html',
  styleUrls: ['./formvalidation.component.css']
})
export class FormvalidationComponent implements OnInit {
  valid:FormGroup;
  constructor(private route:Router,private http:HttpClient) { 
    this.valid = new FormGroup({
      Emailid:new FormControl(''),
      pass:new FormControl('')
    })
  }

  ngOnInit() {
  }
  validate(a)
  {
    console.log(a)
    // if(a.Emailid=='')
    // {
    //   alert('blank username')
    //   return false
    // }
    // else if(a.pass=='')
    // {
    //   alert('blank password')
    //   return false
    // }
    // else if(a.pass.length<5)
    // {
    //   alert('passsword too short')
    //   return false
    // }
    // else
    // {
      this.route.navigateByUrl('dashboard')
    // }
    let data={
      email:a.Emailid,
      password:a.pass
    }
    console.log(data)
    this.http.post('https://reqres.in/api/login',data).subscribe(data=>{console.log(data)})
    console.log("login successfully")
  }

}
