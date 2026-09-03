import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Personal logo for "Matthew Bishop": the MB monogram mark plus a
 * text-based wordmark that follows the current theme's colors.
 */
@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  standalone: true,
  imports: [RouterLink]
})
export class LogoComponent {
  readonly compact = input(false);
}
