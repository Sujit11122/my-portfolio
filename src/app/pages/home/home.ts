import { Component } from '@angular/core';

// IMPORT all section components
import { Aboutcomponent } from '../about/about';
import { ProjectsComponent } from '../projects/projects';
import { Skills } from '../skills/skills';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Aboutcomponent,
    ProjectsComponent,
    Skills,
    Contact
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class Homecomponent {
  title = 'Sujit Gautam';
  role = 'Computer Science Student | Full-Stack Developer';
  tagline =
    'Building scalable, user-focused applications and continuously learning new technologies.';

  scrollTo(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
