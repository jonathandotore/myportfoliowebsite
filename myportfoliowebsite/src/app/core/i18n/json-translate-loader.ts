import { Injectable } from '@angular/core';
import { TranslateLoader, TranslationObject } from '@ngx-translate/core';
import { from, Observable } from 'rxjs';

import { DEFAULT_LANGUAGE, isSupportedLanguage, SupportedLanguage } from './languages';

/**
 * Os JSONs entram no bundle via `import()` (um chunk por idioma) em vez de HTTP:
 * funciona igual no navegador e no prerender/SSR, sem depender de URL absoluta no servidor.
 */
const TRANSLATIONS: Record<SupportedLanguage, () => Promise<{ default: TranslationObject }>> = {
  pt: () => import('../../shared/i18n/pt.json'),
  en: () => import('../../shared/i18n/en.json'),
};

@Injectable()
export class JsonTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<TranslationObject> {
    const load = TRANSLATIONS[isSupportedLanguage(lang) ? lang : DEFAULT_LANGUAGE];
    return from(load().then((module) => module.default));
  }
}
