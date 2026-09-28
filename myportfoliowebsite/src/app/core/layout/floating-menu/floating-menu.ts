import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

import { Icon } from '../../../shared/ui/icon/icon';
import { NAV_ITEMS } from '../../navigation/navigation';
import { LanguageSwitcher } from '../language-switcher/language-switcher';

/**
 * Menu circular flutuante presente em todas as páginas (ancorado à direita).
 * No mobile vira uma barra fixa inferior.
 */
@Component({
  selector: 'app-floating-menu',
  templateUrl: './floating-menu.html',
  styleUrl: './floating-menu.scss',
  imports: [RouterLink, RouterLinkActive, TranslatePipe, Icon, LanguageSwitcher],
})
export class FloatingMenu {
  protected readonly items = NAV_ITEMS;
}
