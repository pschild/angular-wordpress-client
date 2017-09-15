import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TplTextComponent} from './tpl-text.component';

describe('TplTextComponent', () => {
    let component: TplTextComponent;
    let fixture: ComponentFixture<TplTextComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TplTextComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TplTextComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
