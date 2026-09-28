/**
 * Dados pessoais exibidos no site. O que ainda não foi fornecido fica `null` e os
 * componentes mostram o placeholder traduzido correspondente.
 */
export interface Profile {
  readonly name: string;
  /** Caminho da foto (servida de /public). `null` = placeholder "[SUA FOTO]". */
  readonly photoUrl: string | null;
  /** Números do "Sobre mim" (ex.: "5+"). Iguais nos dois idiomas; `null` = placeholder "[X]+". */
  readonly stats: ProfileStats;
}

export interface ProfileStats {
  readonly experience: string | null;
  readonly projects: string | null;
  readonly technologies: string | null;
  readonly certifications: string | null;
}

export const PROFILE: Profile = {
  name: 'Jonathan',
  photoUrl: null, // TODO: placeholder — [SUA FOTO] (Home e sidebar)
  stats: {
    experience: '2+',
    projects: '2+', // TODO: placeholder — [X]+
    technologies: '17+', // TODO: placeholder — [X]+
    certifications: '10+', // TODO: placeholder — [X]+
  },
};
