import { Routes } from '@angular/router';
import { Homecomponent } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: Homecomponent },
  { path: '**', redirectTo: '' }
];
