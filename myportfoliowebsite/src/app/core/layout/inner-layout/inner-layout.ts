import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SideNav } from '../side-nav/side-nav';

/** Casca das páginas internas (Sobre, Currículo, Portfólio, Contato): sidebar + conteúdo. */
@Component({
  selector: 'app-inner-layout',
  templateUrl: './inner-layout.html',
  styleUrl: './inner-layout.scss',
  imports: [RouterOutlet, SideNav],
})
export class InnerLayout {}
