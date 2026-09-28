/**
 * Dados pessoais exibidos no site. O que ainda não foi fornecido fica `null` e os
 * componentes mostram o placeholder traduzido correspondente.
 */
export interface Profile {
    readonly name: string;
    readonly photoUrl: string | null;
    readonly stats: ProfileStats;
    readonly contact: ProfileContact;
}

export interface ProfileContact {
    readonly phoneDisplay: string;
    readonly phoneDigits: string;
    readonly emails: readonly string[];
    readonly linkedin: string;
    readonly github: string;
}

export interface ProfileStats {
    readonly experience: string | null;
    readonly projects: string | null;
    readonly technologies: string | null;
    readonly certifications: string | null;
}

export const PROFILE: Profile = {
    name: 'Jonathan',
    photoUrl: null,
    stats: {
        experience: '2+',
        projects: '2+',
        technologies: '17+',
        certifications: '10+',
    },
    contact: {
        phoneDisplay: '+55 17 99775-0811',
        phoneDigits: '5517997750811',
        emails: ['jonathandotore@outlook.com', 'jonathan.dotoree@gmail.com'],
        linkedin: 'https://www.linkedin.com/in/jonathan-dotore-519b261b3',
        github: 'https://github.com/jonathandotore',
    },
};
