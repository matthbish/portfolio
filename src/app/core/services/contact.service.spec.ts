import { TestBed } from '@angular/core/testing';
import { buildContactMailto, ContactService } from './contact.service';
import { WINDOW } from './window.token';

describe('buildContactMailto', () => {
  it('encodes the subject and body into a mailto: link addressed to the site owner', () => {
    const url = buildContactMailto({
      name: 'Ada Lovelace',
      email: 'ada@example.com',
      subject: 'Hello there',
      message: 'Great site!'
    });

    expect(url.startsWith('mailto:matthbish@gmail.com?')).toBe(true);
    expect(url).toContain(`subject=${encodeURIComponent('Hello there')}`);
    expect(decodeURIComponent(url)).toContain('Great site!');
    expect(decodeURIComponent(url)).toContain('Ada Lovelace (ada@example.com)');
  });
});

describe('ContactService', () => {
  let service: ContactService;
  let openSpy: jasmine.Spy;

  beforeEach(() => {
    openSpy = jasmine.createSpy('open');
    TestBed.overrideProvider(WINDOW, { useValue: { open: openSpy } });
    service = TestBed.inject(ContactService);
  });

  it('starts idle', () => {
    expect(service.submitState()).toBe('idle');
  });

  it('hands off to the mail client in a new tab and transitions to success', () => {
    service.submit({ name: 'Ada', email: 'ada@example.com', subject: 'Hi', message: 'Hi' });

    expect(openSpy).toHaveBeenCalledOnceWith(
      buildContactMailto({ name: 'Ada', email: 'ada@example.com', subject: 'Hi', message: 'Hi' }),
      '_blank',
      'noopener'
    );
    expect(service.submitState()).toBe('success');
  });

  it('reset returns to idle', () => {
    service.submit({ name: 'Ada', email: 'ada@example.com', subject: 'Hi', message: 'Hi' });
    service.reset();
    expect(service.submitState()).toBe('idle');
  });
});
