import { Component, input } from '@angular/core';

export type IconName =
  | 'home'
  | 'user'
  | 'file'
  | 'briefcase'
  | 'mail'
  | 'linkedin'
  | 'code'
  | 'phone'
  | 'server'
  | 'layout'
  | 'menu'
  | 'close';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.html',
  styleUrl: './icon.scss',
  host: { 'aria-hidden': 'true' },
})
export class Icon {
  readonly name = input.required<IconName>();
  readonly size = input(20);
}
