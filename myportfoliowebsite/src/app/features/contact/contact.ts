import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { PROFILE } from '../../core/profile/profile';
import { Button } from '../../shared/ui/button/button';
import { Card } from '../../shared/ui/card/card';
import { FieldControl } from '../../shared/ui/form-field/field-control';
import { FormField } from '../../shared/ui/form-field/form-field';
import { IconTile } from '../../shared/ui/icon-tile/icon-tile';
import { SectionHeader } from '../../shared/ui/section-header/section-header';

const { contact } = PROFILE;

function displayUrl(url: string): string {
    return url.replace(/^https?:\/\/(www\.)?/, '');
}

@Component({
    selector: 'app-contact',
    templateUrl: './contact.html',
    styleUrl: './contact.scss',
    imports: [TranslatePipe, Button, Card, FieldControl, FormField, IconTile, SectionHeader],
})
export class Contact {
    protected readonly phone = {
        display: contact.phoneDisplay,
        whatsapp: `https://wa.me/${contact.phoneDigits}`,
        telegram: `https://t.me/+${contact.phoneDigits}`,
    };

    protected readonly emails = contact.emails.map((address) => ({ address, href: `mailto:${address}` }));
    protected readonly linkedin = { href: contact.linkedin, label: displayUrl(contact.linkedin) };
    protected readonly github = { href: contact.github, label: displayUrl(contact.github) };

    protected onSubmit(event: Event): void {
        event.preventDefault();
    }
}
