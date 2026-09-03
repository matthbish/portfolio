import { Injectable, inject, signal, type OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SITE_PAGES } from '../../data/site-pages.data';

/**
 * Global keyboard shortcuts and easter eggs.
 *
 * - Ctrl+K / Cmd+K opens the command palette
 * - g then a letter navigates to the page(s) starting with that letter
 *   (derived from SITE_PAGES; pressing the same letter again cycles
 *   through ties in alphabetical order)
 * - Konami code toggles a hidden easter egg
 * - "Easter Eggs" in the command palette opens a modal listing all of the above
 */
@Injectable({ providedIn: 'root' })
export class KeyboardShortcutService implements OnDestroy {
  /** Emits when the command palette should open. */
  readonly paletteOpen = signal(false);

  /** Emits when the Konami easter egg is activated. */
  readonly konamiActivated = signal(false);

  /** Emits when the "all easter eggs" modal should be shown. */
  readonly easterEggsModalOpen = signal(false);

  private readonly konamiSequence = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a'
  ];
  private konamiIndex = 0;
  private gPressed = false;
  private readonly router = inject(Router);

  constructor() {
    window.addEventListener('keydown', this.onKeydown);
  }

  ngOnDestroy(): void {
    window.removeEventListener('keydown', this.onKeydown);
  }

  private readonly onKeydown = (event: KeyboardEvent): void => {
    // Ctrl+K / Cmd+K — open the command palette.
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      this.paletteOpen.update((v) => !v);
      return;
    }

    // Ignore when typing in inputs/textareas/contenteditable.
    const target = event.target as HTMLElement | null;
    if (
      target?.tagName === 'INPUT' ||
      target?.tagName === 'TEXTAREA' ||
      target?.isContentEditable
    ) {
      return;
    }

    // Konami code detection.
    this.trackKonami(event.key);

    // 'g' prefix navigation.
    if (event.key.toLowerCase() === 'g') {
      this.gPressed = true;
      return;
    }
    if (this.gPressed) {
      this.gPressed = false;
      this.navigateByLetter(event.key.toLowerCase());
      return;
    }
  };

  /**
   * Pages grouped by the first letter of their label, sorted alphabetically
   * within each group — computed once from SITE_PAGES so a new page is
   * picked up automatically.
   */
  private readonly navGroups: ReadonlyMap<string, readonly string[]> = (() => {
    const byLetter = new Map<string, { label: string; route: string }[]>();
    for (const page of SITE_PAGES) {
      const letter = page.label.trim().charAt(0).toLowerCase();
      const group = byLetter.get(letter) ?? [];
      group.push(page);
      byLetter.set(letter, group);
    }
    const result = new Map<string, readonly string[]>();
    for (const [letter, pages] of byLetter) {
      const sorted = [...pages].sort((a, b) => a.label.localeCompare(b.label));
      result.set(
        letter,
        sorted.map((page) => page.route)
      );
    }
    return result;
  })();

  /** Cycle position within each letter's group, keyed by letter. */
  private readonly navCycleIndex = new Map<string, number>();

  private navigateByLetter(letter: string): void {
    const routesForLetter = this.navGroups.get(letter);
    if (!routesForLetter || routesForLetter.length === 0) {
      return;
    }
    const index = (this.navCycleIndex.get(letter) ?? 0) % routesForLetter.length;
    this.navCycleIndex.set(letter, index + 1);
    void this.router.navigate([routesForLetter[index]]);
  }

  private trackKonami(key: string): void {
    if (key === this.konamiSequence[this.konamiIndex]) {
      this.konamiIndex++;
      if (this.konamiIndex === this.konamiSequence.length) {
        this.konamiIndex = 0;
        this.konamiActivated.update((v) => !v);
      }
    } else {
      this.konamiIndex = key === this.konamiSequence[0] ? 1 : 0;
    }
  }
}
