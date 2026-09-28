/**
 * Dados pessoais exibidos no site. O que ainda não foi fornecido fica `null` e os
 * componentes mostram o placeholder traduzido correspondente.
 */
export interface Profile {
  readonly name: string;
  /** Caminho da foto (servida de /public). `null` = placeholder "[SUA FOTO]". */
  readonly photoUrl: string | null;
}

export const PROFILE: Profile = {
  name: 'Jonathan',
  photoUrl: null, // TODO: placeholder — [SUA FOTO] (Home e sidebar)
};
