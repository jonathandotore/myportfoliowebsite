import { Component, computed, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { Badge } from '../../shared/ui/badge/badge';
import { Card } from '../../shared/ui/card/card';
import { CodeComment } from '../../shared/ui/code-comment/code-comment';
import { FilterChip } from '../../shared/ui/filter-chip/filter-chip';
import { Icon } from '../../shared/ui/icon/icon';
import { SectionHeader } from '../../shared/ui/section-header/section-header';
import { Tone, toneColor } from '../../shared/ui/tone';
import { PROJECT_CATEGORIES, PROJECTS, ProjectCategory } from './portfolio.data';

type Filter = 'all' | ProjectCategory;

const CATEGORY_STYLE: Record<ProjectCategory, { readonly tone: Tone; readonly glyph: string }> = {
  dotnet: { tone: 'accent', glyph: 'C#' },
  angular: { tone: 'string', glyph: '</>' },
  fullstack: { tone: 'type', glyph: '{ }' },
};

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
  imports: [TranslatePipe, Badge, Card, CodeComment, FilterChip, Icon, SectionHeader],
})
export class Portfolio {
  protected readonly filters: readonly Filter[] = ['all', ...PROJECT_CATEGORIES];
  protected readonly activeFilter = signal<Filter>('all');

  private readonly projects = PROJECTS.map((project) => {
    const style = CATEGORY_STYLE[project.category];
    return {
      ...project,
      ...style,
      color: toneColor(style.tone),
      tagsLabel: project.tags.join(' · '),
      titleKey: `portfolio.projects.${project.id}.title`,
      descriptionKey: `portfolio.projects.${project.id}.description`,
    };
  });

  /** Grid filtrada no cliente, sem recarregar a página. */
  protected readonly visibleProjects = computed(() => {
    const filter = this.activeFilter();
    return filter === 'all'
      ? this.projects
      : this.projects.filter((project) => project.category === filter);
  });
}
