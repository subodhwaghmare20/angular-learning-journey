import { Routes } from '@angular/router';
import { Home } from './routing/home/home';
import { About } from './routing/about/about';
import { Routing } from './routing/routing';
import { Contact } from './routing/contact/contact';

export const routes: Routes = [
  {
    path: '',
    component: Routing,
    // pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home,
    children: [{ path: 'contact', component: Contact }],
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'contact',
    component: Contact,
  },
];
