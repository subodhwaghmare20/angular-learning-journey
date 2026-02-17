import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  constructor(private router: Router) {}
  navHandler() {
    // this.router.navigate(['/home']);
    this.router.navigateByUrl('/home');

    console.log(this.router.url);
  }
}
