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
        if (item.media_details.height > item.media_details.width) {
            return item.media_details.sizes.image_grid_portrait.source_url;
        } else {
            return item.media_details.sizes.image_grid_landscape.source_url;
        }
    }

    setActiveIndex(newIndex) {
        if (newIndex === this.items.length || newIndex < 0) {
            return;
        }
        this.activeSlideIndex = newIndex;
    }

}
