import { Component } from '@angular/core';
import {  } from '@angular/form';
import { Http } from '@angular/http';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './edit-user.html',
 
})


export class EdituserComponent {  
  model: any = {};
  id : string;
  constructor(public http: Http, private route: ActivatedRoute ) {
    debugger
    this.id = route.snapshot.params['id'];
    this.http.get(`http://localhost:3000/users/${this.id}`)
      .subscribe(res => {
        this.model = res.json();
      });
  }

    

  update(user) {
    this.model=user;
    this.http.put(`http://localhost:3000/users/${user.id}`, this.model).subscribe(response => {
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