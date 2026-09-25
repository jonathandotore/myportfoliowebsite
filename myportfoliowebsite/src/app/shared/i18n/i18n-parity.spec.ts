import en from './en.json';
import pt from './pt.json';

/** Achata um objeto de traduções em chaves pontuadas (`meta.siteTitle`, ...). */
function flattenKeys(value: unknown, prefix = ''): string[] {
  if (typeof value !== 'object' || value === null) {
    return [prefix];
  }
  return Object.entries(value).flatMap(([key, child]) =>
    flattenKeys(child, prefix ? `${prefix}.${key}` : key),
  );
}

describe('Traduções PT/EN', () => {
  it('pt.json e en.json têm exatamente as mesmas chaves', () => {
    expect(flattenKeys(en).sort()).toEqual(flattenKeys(pt).sort());
  });
});
