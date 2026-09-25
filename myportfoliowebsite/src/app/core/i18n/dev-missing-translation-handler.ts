import { Injectable, isDevMode } from '@angular/core';
import { MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';

/** Avisa no console (só em dev) quando uma chave não existe em nenhum idioma — normalmente um typo. */
@Injectable()
export class DevMissingTranslationHandler implements MissingTranslationHandler {
  handle({ key }: MissingTranslationHandlerParams): string {
    if (isDevMode()) {
      console.warn(`[i18n] Chave de tradução ausente: "${key}"`);
    }
    return key;
  }
}
