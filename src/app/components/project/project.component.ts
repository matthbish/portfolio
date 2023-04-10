import { Component, Input } from '@angular/core';
import { Project } from 'src/app/models/app.models';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {

  @Input()
  set project(proj: Project) {
    this.name = proj.name;
    this.link = proj.link ? proj.link : '';
    this.images = proj.images;
    this.techstack = proj.techstack;
    this.description = proj.description;
  }

  @Input()
  name = 'Project';

  @Input()
  link = '';

  @Input()
  images = [
    '../../assets/project/project.png',
    '../../assets/project/project.png',
    '../../assets/project/project.png',
    '../../assets/project/project.png',
    '../../assets/project/project.png',
    '../../assets/project/project.png',
  ];

  @Input()
  techstack = [
    'Angular',
    'Typescript',
    'HTML',
    'CSS'
  ];

  @Input()
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
  + 'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
  + 'ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in '
  + 'voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, '
  + 'sunt in culpa qui officia deserunt mollit anim id est laborum.';
}
