import { Routes } from '@angular/router';
import { Home } from './routing/home/home';
import { About } from './routing/about/about';
import { Routing } from './routing/routing';
import { Contact } from './routing/contact/contact';
import { ErrorHandler } from './routing/error-handler/error-handler';

export const routes: Routes = [
  {
    path: '',
    component: Routing,
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home,
    children: [
      { path: 'contact', component: Contact },
      { path: 'about', component: About },
    ],
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
    path: 'communication',
    loadComponent() {
      return import('./communication/communication').then((m) => m.Communication);
    },
  },
  {
    path: '**',
    component: ErrorHandler,
    pathMatch: 'full',
  },
];
