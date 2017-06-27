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
  private alphabets: string[] = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  private q:string;
  private sortby:string;
  
constructor(private postService:Postservice, private router: Router, public http: Http,){
  this.q='';
  this.sortby='';
  this.postService.getPost(this.q,this.sortby).subscribe(posts=>{
  	this.posts=posts;
  });	
  

}

valueChange(value) {
    this.q=value;
    this.postService.getPost(this.q,this.sortby).subscribe(posts=>{
		this.posts=posts;
	  });	
  }
  sortBy(value) {
    this.sortby=value;
    this.postService.getPost(this.q,this.sortby).subscribe(posts=>{
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