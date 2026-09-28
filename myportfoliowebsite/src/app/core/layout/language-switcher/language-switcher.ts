import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { LanguageService } from '../../i18n/language.service';

/** Alterna PT ⇄ EN sem recarregar a página. Mostra a sigla do idioma de destino. */
@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.scss',
  imports: [TranslatePipe],
})
export class LanguageSwitcher {
  private readonly language = inject(LanguageService);

  protected toggle(): void {
    void this.language.toggle();
  }
}
