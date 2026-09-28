import { Component, input } from '@angular/core';

export type CodeCommentSize = 'sm' | 'md';

/**
 * Linha no estilo comentário de código (`// texto`), em verde de comentário do C#.
 * As barras são decorativas e ficam fora da leitura de leitores de tela.
 */
@Component({
  selector: 'app-code-comment',
  template: '<span class="slashes" aria-hidden="true">//</span><ng-content />',
  styleUrl: './code-comment.scss',
  host: { '[class.code-comment--md]': "size() === 'md'" },
})
export class CodeComment {
  readonly size = input<CodeCommentSize>('sm');
}
