import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ImageSliderComponent} from './image-slider.component';

describe('ImageSliderComponent', () => {
    let component: ImageSliderComponent;
    let fixture: ComponentFixture<ImageSliderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ImageSliderComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ImageSliderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
