import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideTranslateService, TranslateService } from '@ngx-translate/core';
import { firstValueFrom } from 'rxjs';

import { JsonTranslateLoader } from '../../core/i18n/json-translate-loader';
import { Portfolio } from './portfolio';

describe('Portfolio', () => {
    let fixture: ComponentFixture<Portfolio>;
    let element: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [Portfolio],
            providers: [provideTranslateService({ loader: JsonTranslateLoader })],
        }).compileComponents();
        await firstValueFrom(TestBed.inject(TranslateService).use('pt'));

        fixture = TestBed.createComponent(Portfolio);
        element = fixture.nativeElement as HTMLElement;
        await fixture.whenStable();
    });

    function chip(label: string): HTMLButtonElement {
        const buttons = Array.from(element.querySelectorAll<HTMLButtonElement>('button'));
        return buttons.find((button) => button.textContent?.trim() === label)!;
    }

    it('mostra todos os projetos e o aviso de "em construção" por padrão', () => {
        expect(element.querySelectorAll('article.project').length).toBe(2);
        expect(chip('Todos').getAttribute('aria-pressed')).toBe('true');
        expect(element.querySelector('.portfolio__soon')).not.toBeNull();
    });

    it('filtra os projetos pela categoria escolhida e atualiza o aria-pressed', async () => {
        chip('.NET').click();
        await fixture.whenStable();

        const projects = element.querySelectorAll('article.project');
        expect(projects.length).toBe(1);
        expect(projects[0].textContent).toContain('EducaApp');
        expect(chip('.NET').getAttribute('aria-pressed')).toBe('true');
        expect(chip('Todos').getAttribute('aria-pressed')).toBe('false');
        expect(element.querySelector('.portfolio__soon')).not.toBeNull();
    });
});
