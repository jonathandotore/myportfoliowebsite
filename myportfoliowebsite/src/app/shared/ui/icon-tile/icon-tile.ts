import { Component, computed, input } from '@angular/core';

import { Icon, IconName } from '../icon/icon';
import { Tone, toneColor } from '../tone';

/** Ícone dentro de um quadro com borda ("O que eu faço?", canais de contato). Decorativo. */
@Component({
  selector: 'app-icon-tile',
  template: '<app-icon [name]="icon()" />',
  styleUrl: './icon-tile.scss',
  imports: [Icon],
  host: { '[style.--tile-tone]': 'color()' },
})
export class IconTile {
  readonly icon = input.required<IconName>();
  readonly tone = input<Tone>('accent');

  protected readonly color = computed(() => toneColor(this.tone()));
}
