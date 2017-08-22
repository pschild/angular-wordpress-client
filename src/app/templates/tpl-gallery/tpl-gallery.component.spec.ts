import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TplGalleryComponent} from './tpl-gallery.component';

describe('TplGalleryComponent', () => {
    let component: TplGalleryComponent;
    let fixture: ComponentFixture<TplGalleryComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TplGalleryComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TplGalleryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
