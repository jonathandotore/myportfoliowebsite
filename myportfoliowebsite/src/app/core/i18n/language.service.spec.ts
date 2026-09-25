import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { provideTranslateService } from '@ngx-translate/core';

import { JsonTranslateLoader } from './json-translate-loader';
import { LanguageService } from './language.service';
import { DEFAULT_LANGUAGE } from './languages';

const STORAGE_KEY = 'portfolio.language';

describe('LanguageService', () => {
  let service: LanguageService;
  let document: Document;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({
      providers: [
        provideTranslateService({ loader: JsonTranslateLoader, fallbackLang: DEFAULT_LANGUAGE }),
      ],
    });
    service = TestBed.inject(LanguageService);
    document = TestBed.inject(DOCUMENT);
  });

  it('inicia em português quando não há idioma salvo', async () => {
    await service.init();

    expect(service.current()).toBe('pt');
    expect(document.documentElement.lang).toBe('pt-BR');
  });

  it('inicia no idioma salvo pelo visitante', async () => {
    localStorage.setItem(STORAGE_KEY, 'en');

    await service.init();

    expect(service.current()).toBe('en');
  });

  it('alterna o idioma e atualiza o <html lang> e a meta description', async () => {
    await service.init();

    await service.toggle();

    expect(service.current()).toBe('en');
    expect(document.documentElement.lang).toBe('en');
    expect(document.querySelector('meta[name="description"]')?.getAttribute('content')).toContain(
      'Portfolio of Jonathan',
    );
  });

  it('guarda a escolha do visitante', async () => {
    await service.use('en');

    expect(localStorage.getItem(STORAGE_KEY)).toBe('en');
  });
});
