import { Component, computed, input } from '@angular/core';

import { Icon } from '../icon/icon';

/**
 * - `panel`: preenche o bloco superior da sidebar
 * - `framed`: moldura tracejada (Home)
 * - `avatar`: círculo pequeno (barra superior no tablet/mobile)
 */
export type ProfilePhotoVariant = 'panel' | 'framed' | 'avatar';

const ICON_SIZE: Record<ProfilePhotoVariant, number> = { panel: 48, framed: 56, avatar: 20 };

/** Foto de perfil. Enquanto `src` for nulo, mostra o placeholder (ícone + texto traduzido). */
@Component({
  selector: 'app-profile-photo',
  templateUrl: './profile-photo.html',
  styleUrl: './profile-photo.scss',
  imports: [Icon],
  host: {
    '[class.profile-photo--framed]': "variant() === 'framed'",
    '[class.profile-photo--avatar]': "variant() === 'avatar'",
  },
})
export class ProfilePhoto {
  readonly src = input<string | null>(null);
  readonly alt = input.required<string>();
  /** Texto do placeholder (ex.: "[SUA FOTO]"). */
  readonly placeholder = input.required<string>();
  readonly variant = input<ProfilePhotoVariant>('panel');

  protected readonly iconSize = computed(() => ICON_SIZE[this.variant()]);
}
