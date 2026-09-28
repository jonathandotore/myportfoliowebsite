import { IconName } from '../../shared/ui/icon/icon';

/** Caminhos das rotas — fonte única para o router, os menus e os CTAs. */
export const ROUTE_PATHS = {
  home: '',
  about: 'sobre',
  resume: 'curriculo',
  portfolio: 'portfolio',
  contact: 'contato',
} as const;

export type RouteName = keyof typeof ROUTE_PATHS;

/** Link absoluto para uma rota (`routeLink('about')` → `/sobre`). */
export function routeLink(route: RouteName): string {
  return `/${ROUTE_PATHS[route]}`;
}

export interface NavItem {
  readonly link: string;
  /** Chave i18n do rótulo (também é o título da rota). */
  readonly labelKey: string;
  readonly icon: IconName;
}

/** Itens da sidebar e do menu flutuante, na ordem de exibição. */
export const NAV_ITEMS: readonly NavItem[] = [
  { link: routeLink('home'), labelKey: 'nav.home', icon: 'home' },
  { link: routeLink('about'), labelKey: 'nav.about', icon: 'user' },
  { link: routeLink('resume'), labelKey: 'nav.resume', icon: 'file' },
  { link: routeLink('portfolio'), labelKey: 'nav.portfolio', icon: 'briefcase' },
  { link: routeLink('contact'), labelKey: 'nav.contact', icon: 'mail' },
];
