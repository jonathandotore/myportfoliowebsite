import { Component, inject } from '@angular/core';
import { translate, TranslatePipe, TranslateService } from '@ngx-translate/core';

import { Badge } from '../../shared/ui/badge/badge';
import { Card } from '../../shared/ui/card/card';
import { CodeComment } from '../../shared/ui/code-comment/code-comment';
import { CodeDeclaration } from '../../shared/ui/code-declaration/code-declaration';
import { SectionHeader } from '../../shared/ui/section-header/section-header';
import { CERTIFICATIONS, EDUCATION, EXPERIENCE, STACK } from './resume.data';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
  imports: [TranslatePipe, Badge, Card, CodeComment, CodeDeclaration, SectionHeader],
})
export class Resume {
  private readonly translate = inject(TranslateService);
  /** Abreviações dos meses no idioma atual (`resume.months`). */
  private readonly months = translate('resume.months');

  protected readonly experience = EXPERIENCE.map((item) => {
    const key = `resume.experience.items.${item.id}`;
    return {
      ...item,
      roleKey: `${key}.role`,
      summaryKey: item.detail === 'none' ? null : `${key}.summary`,
      highlightsKey: item.detail === 'full' ? `${key}.highlights` : null,
    };
  });

  protected readonly education = EDUCATION.map((item) => {
    const key = `resume.education.items.${item.id}`;
    return { ...item, courseKey: `${key}.course`, descriptionKey: `${key}.description` };
  });

  protected readonly certifications = CERTIFICATIONS.map((id) => `resume.certifications.items.${id}`);
  protected readonly stack = STACK;

  /** Período no idioma atual, ex.: "jan 2026 – jul 2026". */
  protected period(start: string, end: string | null): string {
    const finish = end ? this.formatMonth(end) : this.translate.instant('resume.present');
    return `${this.formatMonth(start)} – ${finish}`;
  }

  private formatMonth(value: string): string {
    const [year, month] = value.split('-');
    const names = this.months() as string[];
    return `${names[Number(month) - 1]} ${year}`;
  }
}
