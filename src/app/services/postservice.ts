import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Postservice {
	
	constructor(private http:Http) {
		console.log('post service runing...')
	}

	getPost(q,sortby){
 
			return this.http.get('http://localhost:3000/users?q='+q+'&name_like=^'+sortby)
			.map(res=>res.json());
		 
	}
}

