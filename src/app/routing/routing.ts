import { Component } from '@angular/core';

import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-routing',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './routing.html',
  styleUrl: './routing.css',
})
export class Routing {
  dy: string = '/home';
}
