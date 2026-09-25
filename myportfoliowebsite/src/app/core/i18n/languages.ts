export const SUPPORTED_LANGUAGES = ['pt', 'en'] as const;

export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

export const DEFAULT_LANGUAGE: SupportedLanguage = 'pt';

/** Valor do atributo `lang` do <html> para cada idioma. */
export const HTML_LANG: Record<SupportedLanguage, string> = {
  pt: 'pt-BR',
  en: 'en',
};

export function isSupportedLanguage(value: unknown): value is SupportedLanguage {
  return SUPPORTED_LANGUAGES.includes(value as SupportedLanguage);
}
