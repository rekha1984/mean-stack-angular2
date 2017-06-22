import { Component } from '@angular/core';
import {  } from '@angular/form';
import {Postservice } from'../services/postservice';
import { Http } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './edit-user.html',

  providers:[Postservice]
 
})


export class EdituserComponent {  
  model: any = {};
  posts:Post[];
  constructor(public http: Http, private postService:Postservice) {
 this.postService.getPost().subscribe(posts=>{
    this.posts=posts;
   
  });  
  }



  update(user) {
    this.model=user;
    this.http.put(`http://localhost:3000/users/${user.id}`, this.model=user).subscribe(response => {
      alert('sucessfully save');
      
    })
  }



}


interface Post{
  id:'number';
  name:'string';
  lastname:'string'
  phone:'number'
  email:'string';
  city:'string';
  state:'string';
  country:'string';
}