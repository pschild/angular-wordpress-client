import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TplTextGalleryComponent} from './tpl-text-gallery.component';

describe('TplTextGalleryComponent', () => {
    let component: TplTextGalleryComponent;
    let fixture: ComponentFixture<TplTextGalleryComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TplTextGalleryComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TplTextGalleryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
