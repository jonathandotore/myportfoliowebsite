import { DOCUMENT } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

import { FloatingMenu } from './core/layout/floating-menu/floating-menu';

@Component({
  imports: [RouterOutlet, TranslatePipe, FloatingMenu],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  private readonly document = inject(DOCUMENT);

  protected skipToContent(event: Event): void {
    event.preventDefault();
    this.document.getElementById('main-content')?.focus();
  }
}
