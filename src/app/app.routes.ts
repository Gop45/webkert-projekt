import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'foglalas', loadComponent: () => import('./pages/booking/booking.component').then(m => m.BookingComponent) },
  { path: 'kapcsolat', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent) }
];
