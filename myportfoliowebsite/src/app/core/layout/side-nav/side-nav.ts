import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

import { Icon } from '../../../shared/ui/icon/icon';
import { ProfilePhoto } from '../../../shared/ui/profile-photo/profile-photo';
import { NAV_ITEMS } from '../../navigation/navigation';
import { PROFILE } from '../../profile/profile';

/**
 * Navegação das páginas internas. Desktop: coluna fixa de 240px (foto + menu roxo).
 * Tablet/mobile: barra superior com menu hambúrguer.
 */
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.html',
  styleUrl: './side-nav.scss',
  imports: [RouterLink, RouterLinkActive, TranslatePipe, Icon, ProfilePhoto],
  host: { '(keydown.escape)': 'closeMenu()' },
})
export class SideNav {
  protected readonly items = NAV_ITEMS;
  protected readonly profile = PROFILE;
  protected readonly menuOpen = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
