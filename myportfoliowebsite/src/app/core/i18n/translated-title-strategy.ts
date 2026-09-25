import { effect, inject, Injectable, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

/**
 * O `title` de cada rota é uma chave i18n (ex.: `nav.about`). Esta estratégia traduz a chave
 * e atualiza o <title> tanto na navegação quanto na troca de idioma.
 */
@Injectable({ providedIn: 'root' })
export class TranslatedTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);
  private readonly translate = inject(TranslateService);
  private readonly pageKey = signal<string | undefined>(undefined);

  constructor() {
    super();
    effect(() => {
      const key = this.pageKey();
      const title = key
        ? this.translate.instant('meta.pageTitle', { page: this.translate.instant(key) })
        : this.translate.instant('meta.siteTitle');
      this.title.setTitle(title);
    });
  }

  override updateTitle(snapshot: RouterStateSnapshot): void {
    this.pageKey.set(this.buildTitle(snapshot));
  }
}
