import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideTranslateService, TranslateService } from '@ngx-translate/core';
import { firstValueFrom } from 'rxjs';

import { App } from './app';
import { JsonTranslateLoader } from './core/i18n/json-translate-loader';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([]), provideTranslateService({ loader: JsonTranslateLoader })],
    }).compileComponents();
    await firstValueFrom(TestBed.inject(TranslateService).use('pt'));
  });

  it('renderiza o link "pular para o conteúdo" traduzido', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();

    const skipLink = (fixture.nativeElement as HTMLElement).querySelector('.skip-link');
    expect(skipLink?.textContent?.trim()).toBe('Pular para o conteúdo');
  });

  it('renderiza o menu flutuante com os 5 destinos', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();

    const links = (fixture.nativeElement as HTMLElement).querySelectorAll('app-floating-menu a');
    expect(links.length).toBe(5);
  });
});
