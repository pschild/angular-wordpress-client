import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TplPostContentGalleryComponent} from './tpl-post-content-gallery.component';

describe('TplPostContentGalleryComponent', () => {
    let component: TplPostContentGalleryComponent;
    let fixture: ComponentFixture<TplPostContentGalleryComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TplPostContentGalleryComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TplPostContentGalleryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
