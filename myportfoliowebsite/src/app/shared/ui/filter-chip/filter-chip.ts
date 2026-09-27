import { Component, input } from '@angular/core';

/**
 * Chip de filtro alternável (Portfólio). O estado ativo é exposto visualmente e via
 * `aria-pressed`; o consumidor controla o estado e escuta `(click)`.
 */
@Component({
  selector: 'button[appFilterChip]',
  template: '<ng-content />',
  styleUrl: './filter-chip.scss',
  host: {
    type: 'button',
    '[class.filter-chip--active]': 'active()',
    '[attr.aria-pressed]': 'active()',
  },
})
export class FilterChip {
  readonly active = input(false);
}
