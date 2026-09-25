import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter, TitleStrategy } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideTranslateService } from '@ngx-translate/core';

import { routes } from './app.routes';
import { DevMissingTranslationHandler } from './core/i18n/dev-missing-translation-handler';
import { JsonTranslateLoader } from './core/i18n/json-translate-loader';
import { LanguageService } from './core/i18n/language.service';
import { DEFAULT_LANGUAGE } from './core/i18n/languages';
import { TranslatedTitleStrategy } from './core/i18n/translated-title-strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(),
    provideTranslateService({
      loader: JsonTranslateLoader,
      fallbackLang: DEFAULT_LANGUAGE,
      missingTranslationHandler: DevMissingTranslationHandler,
    }),
    provideAppInitializer(() => inject(LanguageService).init()),
    { provide: TitleStrategy, useClass: TranslatedTitleStrategy },
  ],
};
