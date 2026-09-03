import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CommandPaletteComponent } from './shared/components/command-palette/command-palette.component';
import { EasterEggsModalComponent } from './shared/components/easter-eggs-modal/easter-eggs-modal.component';
import { KeyboardShortcutService } from './core/services/keyboard-shortcut.service';
import { ThemeService } from './core/services/theme.service';
import { LogoComponent } from './shared/ui/logo/logo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    FooterComponent,
    LogoComponent,
    CommandPaletteComponent,
    EasterEggsModalComponent
  ]
})
export class AppComponent {
  readonly themeService = inject(ThemeService);
  readonly keyboardShortcuts = inject(KeyboardShortcutService);

  title = 'Matthew Bishop — Software Engineer';
}
