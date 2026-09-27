/**
 * Tons semânticos da paleta (cores de sintaxe do C#). Componentes recebem um `Tone` em vez de
 * uma cor e o mapeamento para a variável CSS fica centralizado aqui.
 */
export type Tone =
  | 'accent'
  | 'type'
  | 'keyword'
  | 'string'
  | 'comment'
  | 'number'
  | 'local'
  | 'interface'
  | 'variable'
  | 'text';

const TONE_TOKENS: Record<Tone, string> = {
  accent: '--accent-primary-light',
  type: '--syntax-type',
  keyword: '--syntax-keyword',
  string: '--syntax-string',
  comment: '--syntax-comment',
  number: '--syntax-number',
  local: '--syntax-local',
  interface: '--syntax-interface',
  variable: '--syntax-variable',
  text: '--vs-text',
};

/** `var(--token)` do tom, para bindings como `[style.--tone]`. */
export function toneColor(tone: Tone): string {
  return `var(${TONE_TOKENS[tone]})`;
}
