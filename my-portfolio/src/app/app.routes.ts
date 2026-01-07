import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Aboutcomponent } from './pages/about/about';
import { ProjectsComponent } from './pages/projects/projects';
import { Skills } from './pages/skills/skills';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: Aboutcomponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'skills', component: Skills },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '/home' }
];
