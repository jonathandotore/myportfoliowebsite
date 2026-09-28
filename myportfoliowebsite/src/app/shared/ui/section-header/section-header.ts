import { Component, input } from '@angular/core';

import { Card } from '../card/card';
import { CodeComment } from '../code-comment/code-comment';

/**
 * Cabeçalho padrão das páginas internas: card com borda superior roxa, nome de arquivo
 * "comentado" e o título da página (é o <h1> da rota).
 */
@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.html',
  styleUrl: './section-header.scss',
  imports: [Card, CodeComment],
})
export class SectionHeader {
  /** Nome de arquivo exibido como comentário (ex.: "sobre-mim.component.ts"). */
  readonly file = input.required<string>();
  readonly heading = input.required<string>();
}
