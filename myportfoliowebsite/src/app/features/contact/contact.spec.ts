import { TestBed } from '@angular/core/testing';
import { provideTranslateService, TranslateService } from '@ngx-translate/core';
import { firstValueFrom } from 'rxjs';

import { JsonTranslateLoader } from '../../core/i18n/json-translate-loader';
import { Contact } from './contact';

describe('Contact', () => {
    let element: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [Contact],
            providers: [provideTranslateService({ loader: JsonTranslateLoader })],
        }).compileComponents();
        await firstValueFrom(TestBed.inject(TranslateService).use('pt'));

        const fixture = TestBed.createComponent(Contact);
        element = fixture.nativeElement as HTMLElement;
        await fixture.whenStable();
    });

    function hrefs(): string[] {
        return Array.from(element.querySelectorAll('a')).map((link) => link.getAttribute('href') ?? '');
    }

    it('liga cada canal ao app certo', () => {
        expect(hrefs()).toEqual(
            expect.arrayContaining([
                'https://wa.me/5517997750811',
                'https://t.me/+5517997750811',
                'mailto:jonathandotore@outlook.com',
                'mailto:jonathan.dotoree@gmail.com',
                'https://www.linkedin.com/in/jonathan-dotore-519b261b3',
                'https://github.com/jonathandotore',
            ]),
        );
    });

    it('abre os links externos em nova aba com rel seguro', () => {
        const external = Array.from(element.querySelectorAll('a[href^="https://"]'));

        expect(external.length).toBe(4);
        for (const link of external) {
            expect(link.getAttribute('target')).toBe('_blank');
            expect(link.getAttribute('rel')).toContain('noopener');
        }
    });

    it('associa cada rótulo do formulário ao seu campo', () => {
        const labels = Array.from(element.querySelectorAll('form label'));

        expect(labels.length).toBe(3);
        for (const label of labels) {
            const control = element.querySelector(`#${label.getAttribute('for')}`);
            expect(control?.matches('input, textarea')).toBe(true);
        }
    });
});
