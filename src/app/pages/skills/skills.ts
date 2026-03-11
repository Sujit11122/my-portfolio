import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class Skills {
  skills = [
    {
      category: 'Programming Languages',
      items: ['Java', 'Python', 'C', 'C++', 'C#', 'JavaScript', 'Kotlin', 'SQL']
    },
    {
      category: 'Frameworks & Libraries',
      items: ['Angular', 'React', 'Node.js', 'Next.js', '.NET']
    },
    {
      category: 'Databases',
      items: ['MySQL', 'PostgreSQL', 'Microsoft Access']
    },
    {
      category: 'Developer Tools',
      items: ['Git', 'GitHub', 'Visual Studio', 'VS Code', 'Android Studio']
    }
  ];
}
