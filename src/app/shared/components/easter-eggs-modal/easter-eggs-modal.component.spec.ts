import { TestBed } from '@angular/core/testing';
import { KeyboardShortcutService } from '../../../core/services/keyboard-shortcut.service';
import { EasterEggsModalComponent } from './easter-eggs-modal.component';

describe('EasterEggsModalComponent', () => {
  let component: EasterEggsModalComponent;
  let keyboardShortcuts: KeyboardShortcutService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [EasterEggsModalComponent] });
    const fixture = TestBed.createComponent(EasterEggsModalComponent);
    component = fixture.componentInstance;
    keyboardShortcuts = TestBed.inject(KeyboardShortcutService);
    fixture.detectChanges();
  });

  afterEach(() => {
    component.ngOnDestroy();
    keyboardShortcuts.ngOnDestroy();
  });

  it('is closed until the service signal opens it', () => {
    expect(component.isOpen()).toBe(false);
    keyboardShortcuts.easterEggsModalOpen.set(true);
    expect(component.isOpen()).toBe(true);
  });

  it('closes on Escape while open', () => {
    keyboardShortcuts.easterEggsModalOpen.set(true);
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    expect(keyboardShortcuts.easterEggsModalOpen()).toBe(false);
  });

  it('ignores Escape while closed', () => {
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    expect(keyboardShortcuts.easterEggsModalOpen()).toBe(false);
  });

  it('close() sets the shared signal false', () => {
    keyboardShortcuts.easterEggsModalOpen.set(true);
    component.close();
    expect(keyboardShortcuts.easterEggsModalOpen()).toBe(false);
  });

  it('lists every known easter egg', () => {
    const names = component.eggs.map((egg) => egg.name);
    expect(names).toContain('Command palette');
    expect(names).toContain('Vim-style navigation');
    expect(names).toContain('Konami code');
  });
});
