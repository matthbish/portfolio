import { Component, Input } from '@angular/core';
import { MOCK_PROJECT } from 'src/app/mocks/app.mocks';
import { Project } from 'src/app/models/app.models';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {

  @Input()
  project: Project = MOCK_PROJECT;
}
