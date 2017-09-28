import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TplProjectsComponent} from './tpl-projects.component';

describe('TplProjectsComponent', () => {
    let component: TplProjectsComponent;
    let fixture: ComponentFixture<TplProjectsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TplProjectsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TplProjectsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
