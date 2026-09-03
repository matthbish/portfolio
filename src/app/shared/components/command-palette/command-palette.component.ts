import {
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  Injector,
  signal,
  runInInjectionContext,
  type OnInit,
  type OnDestroy
} from '@angular/core';
import { Router } from '@angular/router';
import { KeyboardShortcutService } from '../../../core/services/keyboard-shortcut.service';
import { SITE_PAGES } from '../../../data/site-pages.data';

interface PaletteItem {
  label: string;
  route: string;
  hint?: string;
  action?: 'easter-eggs';
}

const PALETTE_ITEMS: PaletteItem[] = [
  ...SITE_PAGES,
  {
    label: 'Easter Eggs',
    route: '/__easter-eggs__',
    hint: '🥚 every hidden trick, revealed',
    action: 'easter-eggs'
  }
];

/**
 * Command palette (Ctrl+K / Cmd+K).
 *
 * Provides fast, keyboard-first navigation across the site. Search filters
 * the available commands, arrow keys cycle through results, and Enter
 * navigates. Escape or clicking the backdrop closes the palette.
 */
@Component({
  selector: 'app-command-palette',
  templateUrl: './command-palette.component.html',
  styleUrls: ['./command-palette.component.scss'],
  standalone: true
})
export class CommandPaletteComponent implements OnInit, OnDestroy {
  private readonly keyboardShortcuts = inject(KeyboardShortcutService);
  private readonly router = inject(Router);
  private readonly elementRef = inject(ElementRef);
  private readonly injector = inject(Injector);

  readonly isOpen = this.keyboardShortcuts.paletteOpen;

  readonly query = signal('');
  readonly activeIndex = signal(0);

  /** ID of the DOM listbox element for aria-activedescendant wiring. */
  readonly listId = 'palette-list';

  /** IDs of the option elements, keyed by route. */
  readonly optionIds: Record<string, string> = Object.fromEntries(
    PALETTE_ITEMS.map((item) => [item.route, `palette-option-${item.route.replace(/\//g, '')}`])
  );

  readonly filteredItems = computed(() => {
    const q = this.query().trim().toLowerCase();
    if (!q) {
      return PALETTE_ITEMS;
    }
    return PALETTE_ITEMS.filter((item) => item.label.toLowerCase().includes(q));
  });

  /** Keep the active index within bounds as the list changes. */
  private readonly resetIndexOnFilter = effect(
    () => {
      void this.filteredItems();
      this.activeIndex.set(0);
    },
    { injector: this.injector }
  );

  /** The currently active option's ID for aria-activedescendant. */
  readonly activeOptionId = computed(() => {
    const items = this.filteredItems();
    const item = items[this.activeIndex()];
    return item ? this.optionIds[item.route] : '';
  });

  private readonly keydownHandler = (event: KeyboardEvent): void => {
    if (!this.isOpen()) {
      return;
    }
    if (event.key === 'Tab') {
      this.trapFocus(event);
      return;
    }
    if (event.key === 'Escape') {
      this.close();
      return;
    }
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.move(1);
      return;
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.move(-1);
      return;
    }
    if (event.key === 'Enter') {
      event.preventDefault();
      this.activate();
    }
  };

  /** Keeps Tab focus cycling within the open palette. */
  private trapFocus(event: KeyboardEvent): void {
    const focusables: NodeListOf<HTMLElement> = this.elementRef.nativeElement.querySelectorAll(
      'input, button:not([disabled])'
    );
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

  ngOnInit(): void {
    // Reset query and focus the input each time the palette opens.
    runInInjectionContext(this.injector, () => {
      effect(() => {
        if (this.isOpen()) {
          this.query.set('');
          this.activeIndex.set(0);
          // Focus the input after the DOM renders.
          requestAnimationFrame(() => {
            const input: HTMLInputElement | null =
              this.elementRef.nativeElement.querySelector('.palette-input');
            input?.focus();
          });
        }
      });
    });
  }

  ngOnDestroy(): void {
    window.removeEventListener('keydown', this.keydownHandler);
  }

  close(): void {
    this.keyboardShortcuts.paletteOpen.set(false);
  }

  move(delta: number): void {
    const items = this.filteredItems();
    if (!items.length) {
      return;
    }
    const count = items.length;
    this.activeIndex.update((i) => (i + delta + count) % count);
  }

  activate(): void {
    const items = this.filteredItems();
    const item = items[this.activeIndex()];
    if (!item) {
      return;
    }
    this.close();
    if (item.action === 'easter-eggs') {
      this.keyboardShortcuts.easterEggsModalOpen.set(true);
      return;
    }
    void this.router.navigate([item.route]);
  }
}
