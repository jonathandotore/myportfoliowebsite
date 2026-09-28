import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { PROFILE, ProfileStats } from '../../core/profile/profile';
import { Card } from '../../shared/ui/card/card';
import { IconName } from '../../shared/ui/icon/icon';
import { IconTile } from '../../shared/ui/icon-tile/icon-tile';
import { SectionHeader } from '../../shared/ui/section-header/section-header';
import { Tone, toneColor } from '../../shared/ui/tone';

interface Service {
  readonly icon: IconName;
  readonly tone: Tone;
  readonly titleKey: string;
  readonly descriptionKey: string;
}

/** Ordem de exibição do grid 2×2. Os valores vêm de `PROFILE.stats` (core/profile/profile.ts). */
const STAT_ORDER: readonly (keyof ProfileStats)[] = [
  'experience',
  'projects',
  'technologies',
  'certifications',
];

const SERVICES: readonly Service[] = [
  {
    icon: 'server',
    tone: 'accent',
    titleKey: 'about.services.backend.title',
    descriptionKey: 'about.services.backend.description',
  },
  {
    icon: 'layout',
    tone: 'string',
    titleKey: 'about.services.frontend.title',
    descriptionKey: 'about.services.frontend.description',
  },
  {
    icon: 'code',
    tone: 'type',
    titleKey: 'about.services.integrations.title',
    descriptionKey: 'about.services.integrations.description',
  },
];

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
  imports: [TranslatePipe, Card, IconTile, SectionHeader],
})
export class About {
  protected readonly profile = PROFILE;
  protected readonly stats = STAT_ORDER.map((key) => ({
    labelKey: `about.stats.${key}`,
    value: PROFILE.stats[key],
  }));
  protected readonly services = SERVICES.map((service) => ({
    ...service,
    color: toneColor(service.tone),
  }));
}
