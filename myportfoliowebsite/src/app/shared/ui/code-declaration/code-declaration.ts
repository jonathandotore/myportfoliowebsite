import { Component, input } from '@angular/core';

/**
 * Título de seção no formato de declaração de variável: `var experiencia = [`.
 * Leitores de tela ouvem só o `label` (ex.: "Experiência"), sem a sintaxe.
 */
@Component({
  selector: 'app-code-declaration',
  template: `
    <h2 class="code-declaration" [attr.aria-label]="label()">
      <span class="code-declaration__keyword">var</span>&ngsp;<span class="code-declaration__name">{{
        name()
      }}</span>
      = [
    </h2>
  `,
  styleUrl: './code-declaration.scss',
})
export class CodeDeclaration {
  /** Nome da variável exibido (ex.: "experiencia"). */
  readonly name = input.required<string>();
  /** Nome legível da seção, usado como nome acessível do título. */
  readonly label = input.required<string>();
}
