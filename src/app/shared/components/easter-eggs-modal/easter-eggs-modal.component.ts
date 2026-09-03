import { Component, ElementRef, inject, type OnDestroy } from '@angular/core';
import { KeyboardShortcutService } from '../../../core/services/keyboard-shortcut.service';

interface EasterEgg {
  name: string;
  trigger: string;
  description: string;
}

const EASTER_EGGS: EasterEgg[] = [
  {
    name: 'Command palette',
    trigger: 'Ctrl K / Cmd K',
    description: 'Search and jump anywhere on the site without touching the mouse.'
  },
  {
    name: 'Vim-style navigation',
    trigger: 'g then a letter',
    description:
      'Press g, then the first letter of a page name, to warp there. If more than one page shares that letter, pressing it again cycles to the next one alphabetically.'
  },
  {
    name: 'Konami code',
    trigger: '↑ ↑ ↓ ↓ ← → ← → B A',
    description: 'The classic cheat code. Enter it anywhere on the page for a small surprise.'
  },
  {
    name: 'This very list',
    trigger: 'Ctrl K / Cmd K → "Easter Eggs"',
    description: "You're looking at it."
  }
];

/**
 * Modal listing every hidden shortcut on the site, opened from the
 * command palette's "Easter Eggs" entry.
 */
@Component({
  selector: 'app-easter-eggs-modal',
  templateUrl: './easter-eggs-modal.component.html',
  styleUrls: ['./easter-eggs-modal.component.scss'],
  standalone: true
})
export class EasterEggsModalComponent implements OnDestroy {
  private readonly keyboardShortcuts = inject(KeyboardShortcutService);
  private readonly elementRef = inject(ElementRef);

  readonly isOpen = this.keyboardShortcuts.easterEggsModalOpen;
  readonly eggs = EASTER_EGGS;

  private readonly keydownHandler = (event: KeyboardEvent): void => {
    if (!this.isOpen()) {
      return;
    }
    if (event.key === 'Escape') {
      this.close();
      return;
    }
    if (event.key === 'Tab') {
      this.trapFocus(event);
    }
  };

  private trapFocus(event: KeyboardEvent): void {
    const focusables: NodeListOf<HTMLElement> =
      this.elementRef.nativeElement.querySelectorAll('button:not([disabled])');
    if (focusables.length === 0) {
      event.preventDefault();
      return;
    }
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  constructor() {
    window.addEventListener('keydown', this.keydownHandler);
  }

  ngOnDestroy(): void {
    window.removeEventListener('keydown', this.keydownHandler);
  }

  close(): void {
    this.keyboardShortcuts.easterEggsModalOpen.set(false);
  }
}
