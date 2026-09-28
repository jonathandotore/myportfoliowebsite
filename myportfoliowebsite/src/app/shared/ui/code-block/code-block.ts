import { Component, input } from '@angular/core';

/** Categorias de destaque de sintaxe, espelhando as cores do tema do Visual Studio. */
export type SyntaxKind =
  | 'keyword'
  | 'control'
  | 'type'
  | 'interface'
  | 'string'
  | 'number'
  | 'comment'
  | 'local'
  | 'variable'
  | 'plain';

export interface CodeToken {
  readonly text: string;
  readonly kind?: SyntaxKind;
}

export type CodeLine = readonly CodeToken[];

/**
 * Bloco "tipo editor de código": números de linha à esquerda e tokens coloridos por categoria.
 * Espaços e indentação vão dentro do `text` de cada token.
 */
@Component({
  selector: 'app-code-block',
  templateUrl: './code-block.html',
  styleUrl: './code-block.scss',
})
export class CodeBlock {
  readonly lines = input.required<readonly CodeLine[]>();
}
