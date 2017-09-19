import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-image-slider',
    templateUrl: './image-slider.component.html',
    styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {

    @Input() items: Array<any> = [];

    activeSlideIndex: number = 0;

    constructor() {
    }

    ngOnInit() {
    }

    getSourceUrl(item) {
        return item.media_details.sizes.full.source_url;
    }

    setActiveIndex(newIndex) {
        if (newIndex === this.items.length || newIndex < 0) {
            return;
        }
        this.activeSlideIndex = newIndex;
    }

}
