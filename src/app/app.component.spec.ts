import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { ThemeService } from './core/services/theme.service';
import { KeyboardShortcutService } from './core/services/keyboard-shortcut.service';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should expose the portfolio title', () => {
    expect(component.title).toBe('Matthew Bishop — Software Engineer');
  });

  it('should render a skip link to main content', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const skipLink = compiled.querySelector<HTMLAnchorElement>('a.skip-link');
    expect(skipLink).toBeTruthy();
    expect(skipLink?.getAttribute('href')).toBe('#main-content');
  });

  it('should expose the theme service', () => {
    expect(component.themeService).toBeInstanceOf(ThemeService);
  });

  it('should expose the keyboard shortcut service', () => {
    expect(component.keyboardShortcuts).toBeInstanceOf(KeyboardShortcutService);
  });
});
