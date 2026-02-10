import { Routes } from '@angular/router';
import { Home } from './routing/home/home';
import { About } from './routing/about/about';
import { Routing } from './routing/routing';

export const routes: Routes = [
  {
    path: '',
    component: Routing,
  },
  {
    path: 'Home',
    component: Home,
  },
  {
    path: 'About',
    component: About,
  },
];
