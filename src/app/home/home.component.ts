import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
message: string;
  /**
 *
 */
  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation()
    this.message = "";  
    // console.log(nav?.extras.state)
    if(nav?.extras.state != null){
      let state = nav.extras.state as{
      message: string
    };
    console.log(state);
    this.message = state?.message
    }    
  }
}
