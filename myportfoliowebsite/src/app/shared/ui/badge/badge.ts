import { Component, computed, input } from '@angular/core';
import { Tone, toneColor } from '../tone';

/**
 * - `solid`: rótulo roxo retangular (cargo na Home, período nos cards do Currículo)
 * - `outline`: chip pill com borda (tecnologias da Stack)
 * - `text`: só texto colorido pelo `tone` (categoria no card de projeto)
 */
export type BadgeVariant = 'solid' | 'outline' | 'text';
export type BadgeSize = 'sm' | 'md';

@Component({
  selector: 'app-badge',
  template: '<ng-content />',
  styleUrl: './badge.scss',
  host: {
    '[class.badge--solid]': "variant() === 'solid'",
    '[class.badge--outline]': "variant() === 'outline'",
    '[class.badge--text]': "variant() === 'text'",
    '[class.badge--sm]': "size() === 'sm'",
    '[style.--badge-tone]': 'color()',
  },
})
export class Badge {
  readonly variant = input<BadgeVariant>('solid');
  readonly size = input<BadgeSize>('md');
  readonly tone = input<Tone>('text');

  protected readonly color = computed(() => toneColor(this.tone()));
}
