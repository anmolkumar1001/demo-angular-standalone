import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';


import { Home } from './home/home';
import { About } from './about/about';

const routes: Routes = [
  { path: '', component: Home},
  { path: 'about', component: About}
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
};
