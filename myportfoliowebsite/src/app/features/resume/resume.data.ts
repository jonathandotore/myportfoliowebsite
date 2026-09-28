/**
 * Dados do currículo que não mudam com o idioma (empresas, datas, tecnologias).
 * Os textos (cargo, resumo, destaques) ficam em pt.json/en.json, em `resume.*.items.<id>`.
 * Datas no formato "AAAA-MM"; `end: null` = cargo atual.
 */

/** Quanto texto o cargo tem no i18n: resumo + destaques, só resumo, ou nenhum. */
export type ExperienceDetail = 'full' | 'summary' | 'none';

export interface ExperienceEntry {
  /** Chave em `resume.experience.items.<id>`. */
  readonly id: string;
  readonly company: string;
  readonly start: string;
  readonly end: string | null;
  readonly detail: ExperienceDetail;
  readonly stack: readonly string[];
}

export interface EducationEntry {
  /** Chave em `resume.education.items.<id>`. */
  readonly id: string;
  readonly institution: string;
  readonly start: string;
  readonly end: string | null;
}

/** Do mais recente para o mais antigo. */
export const EXPERIENCE: readonly ExperienceEntry[] = [
  {
    id: 'ecori',
    company: 'Ecori Energia Solar',
    start: '2026-01',
    end: '2026-07',
    detail: 'full',
    stack: [
      'C#',
      '.NET',
      'Angular',
      'SQL Server',
      'Dapper',
      'Entity Framework',
      'Microservices',
      'Vertical Slice Architecture',
      'DDD',
      'CQRS',
    ],
  },
  {
    id: 'allRisk',
    company: 'All Risk Soluções Corporativas',
    start: '2025-07',
    end: '2026-01',
    detail: 'full',
    stack: [
      'C#',
      '.NET',
      'Angular',
      'SQL Server',
      'Dapper',
      'Entity Framework',
      'DDD',
      'CQRS',
      'Docker',
      'Vertical Slice Architecture',
    ],
  },
  {
    id: 'itravelDeveloper',
    company: 'iTravel',
    start: '2024-04',
    end: '2024-10',
    detail: 'full',
    stack: [
      'C#',
      'ASP.NET Core',
      'REST API',
      'Microservices',
      'SQL Server',
      'Dapper',
      'Entity Framework',
      'Git',
    ],
  }
];

export const EDUCATION: readonly EducationEntry[] = [
  {
    id: 'fmu',
    institution: 'Centro Universitário FMU | FIAM-FAAM',
    start: '2025-01',
    end: '2027-06',
  },
];

/** Chaves em `resume.certifications.items.<id>`. */
export const CERTIFICATIONS: readonly string[] = [
  'dataAccess',
  'csharpFirstSteps',
  'databaseSql',
  'csharpComplete',
];

/** Chips do bloco "// stack:". */
export const STACK: readonly string[] = [
  'C#',
  '.NET',
  'ASP.NET Core',
  'Angular',
  'JavaScript',
  'HTML',
  'CSS/SCSS',
  'SQL Server',
  'PostgreSQL',
  'MySQL',
  'Entity Framework',
  'Dapper',
  'ADO.NET',
  'Docker',
  'Git',
  'Azure DevOps',
];
