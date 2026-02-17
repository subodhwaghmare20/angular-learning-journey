import { Routes } from '@angular/router';
import { Home } from './routing/home/home';
import { About } from './routing/about/about';
import { Routing } from './routing/routing';
<<<<<<< HEAD
import { Contact } from './routing/contact/contact';
import { ErrorHandler } from './routing/error-handler/error-handler';
=======
>>>>>>> 666e3f74d7d0eb787fb517d1d0694870b7b3319a

export const routes: Routes = [
  {
    path: '',
    component: Routing,
<<<<<<< HEAD
    pathMatch: 'full',
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
    // redirectTo: 'Contact',
    // pathMatch: 'full',
  },
  {
    path: '**',
    component: ErrorHandler,
    pathMatch: 'full',
  },
=======
  },
  {
    path: 'Home',
    component: Home,
  },
  {
    path: 'About',
    component: About,
  },
>>>>>>> 666e3f74d7d0eb787fb517d1d0694870b7b3319a
];
