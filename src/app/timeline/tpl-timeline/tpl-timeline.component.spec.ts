import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TplTimelineComponent} from './tpl-timeline.component';

describe('TplTimelineComponent', () => {
    let component: TplTimelineComponent;
    let fixture: ComponentFixture<TplTimelineComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TplTimelineComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TplTimelineComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
