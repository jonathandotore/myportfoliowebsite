import { Component, input } from '@angular/core';

export type ButtonVariant = 'primary' | 'secondary';

/**
 * CTA do design system. Aplicado como atributo para manter o elemento semântico real:
 * `<button appButton>` para ações, `<a appButton routerLink="...">` para navegação.
 */
@Component({
  selector: 'button[appButton], a[appButton]',
  template: '<ng-content />',
  styleUrl: './button.scss',
  host: {
    '[class.btn--primary]': "variant() === 'primary'",
    '[class.btn--secondary]': "variant() === 'secondary'",
  },
})
export class Button {
  readonly variant = input<ButtonVariant>('primary');
}
