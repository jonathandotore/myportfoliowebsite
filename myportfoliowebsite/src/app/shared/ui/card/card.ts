import { Component, input } from '@angular/core';

export type CardPadding = 'none' | 'md' | 'lg';
/** `panel` = superfície padrão; `code` = bloco "terminal" mais escuro (grid de estatísticas). */
export type CardSurface = 'panel' | 'code';

/**
 * Superfície base (fundo de painel + borda + raio). Use como elemento (`<app-card>`) ou como
 * atributo no elemento semântico certo (`<article appCard>`, `<header appCard>`, `<form appCard>`).
 */
@Component({
  selector: 'app-card, [appCard]',
  template: '<ng-content />',
  styleUrl: './card.scss',
  host: {
    '[class.card--flush]': "padding() === 'none'",
    '[class.card--roomy]': "padding() === 'lg'",
    '[class.card--code]': "surface() === 'code'",
  },
})
export class Card {
  readonly padding = input<CardPadding>('md');
  readonly surface = input<CardSurface>('panel');
}
