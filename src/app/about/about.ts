import { Component } from '@angular/core';
import {Postservice } from'../services/postservice';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './about.html',
  providers:[Postservice]
})
export class AboutComponent {
  posts:Post[];
  model: any = {};
constructor(private postService:Postservice, private router: Router, public http: Http,){
  var q='';
  this.postService.getPost(q).subscribe(posts=>{
  	this.posts=posts;
  });	
 

}

valueChange(value) {
   
    this.postService.getPost(value).subscribe(posts=>{
		this.posts=posts;
	  });	
  }
  
  del(user) {
    this.model=user;
    this.http.delete(`http://localhost:3000/users/${user.id}`, this.model=user).subscribe(response => {
      alert('sucessfully delete');
      
    })
  }


update(dhruv){
  this.model=dhruv;
  this.router.navigateByUrl(`/edit-user/${dhruv.id}`)

}


}


interface Post{
  id:'number';
  name:'string';
  country:'string';
  streetAddress:'string';
  secondaryAddress:'string';
  state:'string';
  city:'string';
  zipCode:'number'
  email:'string';
  DOB: 'number';
  image:'string';
}