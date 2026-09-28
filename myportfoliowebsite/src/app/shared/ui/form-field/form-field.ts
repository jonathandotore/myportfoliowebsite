import { Component, computed, input } from '@angular/core';

/**
 * Rótulo + controle + mensagem de erro. O controle projetado (`<input appField>` /
 * `<textarea appField>`) recebe `id`, `aria-invalid` e `aria-describedby` automaticamente.
 *
 * ```html
 * <app-form-field [label]="'contact.form.name' | translate" controlId="contact-name">
 *   <input appField type="text" name="name" autocomplete="name" />
 * </app-form-field>
 * ```
 */
@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.html',
  styleUrl: './form-field.scss',
})
export class FormField {
  readonly label = input.required<string>();
  /** `id` do controle, usado no `<label for>`. Precisa ser único na página. */
  readonly controlId = input.required<string>();
  /** Mensagem de erro já traduzida; `null` = campo válido. */
  readonly error = input<string | null>(null);

  readonly errorId = computed(() => `${this.controlId()}-error`);
}
