import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { KeyboardShortcutService } from './keyboard-shortcut.service';
import { SITE_PAGES, type SitePage } from '../../data/site-pages.data';

describe('KeyboardShortcutService', () => {
  let service: KeyboardShortcutService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideRouter([])] });
    service = TestBed.inject(KeyboardShortcutService);
    router = TestBed.inject(Router);
  });

  afterEach(() => {
    service.ngOnDestroy();
  });

  function press(key: string, init: KeyboardEventInit = {}): void {
    window.dispatchEvent(new KeyboardEvent('keydown', { key, ...init }));
  }

  it('opens the command palette on Ctrl+K and toggles it shut on a second press', () => {
    expect(service.paletteOpen()).toBe(false);
    press('k', { ctrlKey: true });
    expect(service.paletteOpen()).toBe(true);
    press('k', { ctrlKey: true });
    expect(service.paletteOpen()).toBe(false);
  });

  it('navigates via g-prefixed shortcuts, derived from the first letter of the page label', () => {
    const navigateSpy = spyOn(router, 'navigate');
    press('g');
    press('p');
    expect(navigateSpy).toHaveBeenCalledWith(['/projects']);
  });

  it('does nothing for an unrecognized key after the g prefix', () => {
    const navigateSpy = spyOn(router, 'navigate');
    press('g');
    press('z');
    expect(navigateSpy).not.toHaveBeenCalled();
  });

  describe('when multiple pages share the same first letter', () => {
    const fakePage: SitePage = { label: 'Reading', route: '/reading', hint: 'test fixture' };
    const pages = SITE_PAGES as unknown as SitePage[];

    beforeEach(() => {
      // "Resume" already starts with r; add a second r-page to force a cycle.
      pages.push(fakePage);
      service.ngOnDestroy();
      TestBed.resetTestingModule();
      TestBed.configureTestingModule({ providers: [provideRouter([])] });
      service = TestBed.inject(KeyboardShortcutService);
      router = TestBed.inject(Router);
    });

    afterEach(() => {
      const index = pages.indexOf(fakePage);
      if (index !== -1) {
        pages.splice(index, 1);
      }
    });

    it('cycles through same-letter pages in alphabetical order and wraps around', () => {
      const navigateSpy = spyOn(router, 'navigate');

      press('g');
      press('r');
      expect(navigateSpy).toHaveBeenCalledWith(['/reading']);

      press('g');
      press('r');
      expect(navigateSpy).toHaveBeenCalledWith(['/resume']);

      press('g');
      press('r');
      expect(navigateSpy).toHaveBeenCalledWith(['/reading']);
    });
  });

  it('activates the Konami code once the full sequence is entered', () => {
    const sequence = [
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
    expect(service.konamiActivated()).toBe(false);
    sequence.forEach((key) => press(key));
    expect(service.konamiActivated()).toBe(true);
  });

  it('ignores the g-prefixed shortcut while typing in an input', () => {
    const input = document.createElement('input');
    document.body.appendChild(input);
    const navigateSpy = spyOn(router, 'navigate');

    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'g', bubbles: true }));
    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'p', bubbles: true }));

    expect(navigateSpy).not.toHaveBeenCalled();
    input.remove();
  });
});
