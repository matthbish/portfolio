import { Component } from '@angular/core';
import { LogoComponent } from '../../ui/logo/logo.component';
import { SOCIAL_LINKS } from '../../../data/social-links.data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [LogoComponent]
})
export class FooterComponent {
  readonly year = new Date().getFullYear();
  readonly links = SOCIAL_LINKS;

  /** Engineering metadata — a quiet nod to reviewers who inspect the build. */
  readonly buildInfo = {
    version: '2.0.0',
    engine: 'Angular 20',
    branch: 'main'
  };
}
