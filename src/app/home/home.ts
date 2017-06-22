import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './home.html'
})
export class HomeComponent {
  name = 'dhruvsingh ';
  email = 'dhruvsingh38@gmail.com'
  address={
  	street:'192/88 Near jankidevi Public School', city:'Jaipur', State:'Rajasthan', country:'India'
  }
}
