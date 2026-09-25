import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { computed, inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { firstValueFrom } from 'rxjs';

import { DEFAULT_LANGUAGE, HTML_LANG, isSupportedLanguage, SupportedLanguage } from './languages';

const STORAGE_KEY = 'portfolio.language';

/**
 * Idioma ativo do site. Troca em tempo de execução (sem recarregar a rota), mantém o
 * `<html lang>` e a meta description em sincronia e lembra a escolha do visitante.
 */
@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly translate = inject(TranslateService);
  private readonly document = inject(DOCUMENT);
  private readonly meta = inject(Meta);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  readonly current = computed<SupportedLanguage>(() => {
    const lang = this.translate.currentLang();
    return isSupportedLanguage(lang) ? lang : DEFAULT_LANGUAGE;
  });

  /** Carrega o idioma inicial: o salvo pelo visitante ou o padrão (PT). */
  init(): Promise<void> {
    return this.use(this.readStoredLanguage() ?? DEFAULT_LANGUAGE);
  }

  toggle(): Promise<void> {
    return this.use(this.current() === 'pt' ? 'en' : 'pt');
  }

  async use(lang: SupportedLanguage): Promise<void> {
    await firstValueFrom(this.translate.use(lang));
    this.document.documentElement.lang = HTML_LANG[lang];
    this.meta.updateTag({ name: 'description', content: this.translate.instant('meta.description') });
    this.storeLanguage(lang);
  }

  private readStoredLanguage(): SupportedLanguage | null {
    if (!this.isBrowser) {
      return null;
    }

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return isSupportedLanguage(stored) ? stored : null;
    } 
    catch {
      return null;
    }
  }

  private storeLanguage(lang: SupportedLanguage): void {
    if (!this.isBrowser) return;

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } 
    catch {}
  }
}
