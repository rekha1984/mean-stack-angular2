import { Component } from '@angular/core';
import {  } from '@angular/form';
import { Http } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './add-user.html',
 
})


export class AdduserComponent {  


  model: any = {};
  constructor(public http: Http) {

  }

  save() {
    debugger;
    console.log(this.model)
    this.http.post('http://localhost:3000/users', this.model).subscribe(response => {
      alert('sucessfully save');
      this.model={};
    })
    

  }
}


