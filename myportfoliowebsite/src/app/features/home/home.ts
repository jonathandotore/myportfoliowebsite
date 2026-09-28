import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

import { routeLink } from '../../core/navigation/navigation';
import { PROFILE } from '../../core/profile/profile';
import { Badge } from '../../shared/ui/badge/badge';
import { Button } from '../../shared/ui/button/button';
import { CodeBlock, CodeLine } from '../../shared/ui/code-block/code-block';
import { CodeComment } from '../../shared/ui/code-comment/code-comment';
import { ProfilePhoto } from '../../shared/ui/profile-photo/profile-photo';

/** Pseudocódigo do hero. É código C#, idêntico nos dois idiomas, por isso não passa pelo i18n. */
const HERO_CODE: readonly CodeLine[] = [
  [
    { text: 'public ', kind: 'keyword' },
    { text: 'class ', kind: 'keyword' },
    { text: PROFILE.name, kind: 'type' },
    { text: ' : ' },
    { text: 'IDeveloper', kind: 'interface' },
  ],
  [{ text: '{' }],
  [
    { text: '    public ', kind: 'keyword' },
    { text: 'string', kind: 'keyword' },
    { text: '[] ' },
    { text: 'Stack', kind: 'variable' },
    { text: ' => [' },
    { text: '".NET"', kind: 'string' },
    { text: ', ' },
    { text: '"Angular"', kind: 'string' },
    { text: '];' },
  ],
  [
    { text: '    public ', kind: 'keyword' },
    { text: 'bool ', kind: 'keyword' },
    { text: 'OpenToWork', kind: 'variable' },
    { text: ' => ' },
    { text: 'true', kind: 'keyword' },
    { text: ';' },
  ],
  [{ text: '}' }],
];

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
  imports: [RouterLink, TranslatePipe, Badge, Button, CodeBlock, CodeComment, ProfilePhoto],
})
export class Home {
  protected readonly profile = PROFILE;
  protected readonly codeLines = HERO_CODE;
  protected readonly aboutLink = routeLink('about');
  protected readonly contactLink = routeLink('contact');
}
