import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TplPostCodeblocksComponent} from './tpl-post-codeblocks.component';

describe('TplPostCodeblocksComponent', () => {
    let component: TplPostCodeblocksComponent;
    let fixture: ComponentFixture<TplPostCodeblocksComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TplPostCodeblocksComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TplPostCodeblocksComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
