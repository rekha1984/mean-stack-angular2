import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Postservice {
	
	constructor(private http:Http) {
		console.log('post service runing...')
	}

	getPost(){
		return this.http.get('http://localhost:3000/users')
		.map(res=>res.json());
	}
}

