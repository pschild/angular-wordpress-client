import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TplPostsComponent} from './tpl-posts.component';

describe('TplPostsComponent', () => {
    let component: TplPostsComponent;
    let fixture: ComponentFixture<TplPostsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TplPostsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TplPostsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
