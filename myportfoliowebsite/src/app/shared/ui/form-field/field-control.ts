import { computed, Directive, HostAttributeToken, inject } from '@angular/core';

import { FormField } from './form-field';

/**
 * Marca um `<input>`/`<textarea>` como controle do design system. Os estilos ficam em
 * `src/styles/_forms.scss` (classe `.field`); dentro de `<app-form-field>` a ligação
 * de acessibilidade com o rótulo e a mensagem de erro é feita aqui.
 */
@Directive({
  selector: 'input[appField], textarea[appField]',
  host: {
    class: 'field',
    '[attr.id]': 'id()',
    '[attr.aria-invalid]': 'invalid() || null',
    '[attr.aria-describedby]': 'invalid() ? formField?.errorId() : null',
  },
})
export class FieldControl {
  protected readonly formField = inject(FormField, { optional: true });
  private readonly staticId = inject(new HostAttributeToken('id'), { optional: true });

  protected readonly id = computed(() => this.formField?.controlId() ?? this.staticId);
  protected readonly invalid = computed(() => !!this.formField?.error());
}
