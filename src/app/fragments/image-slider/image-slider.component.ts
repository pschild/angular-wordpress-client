import {Component, Input, OnInit} from '@angular/core';
import {KeyCode} from "../../enums/key-code.enum";

@Component({
    selector: 'app-image-slider',
    host: {'(window:keyup)': 'handleKeyDown($event)'},
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

    handleKeyDown(event: KeyboardEvent) {
        switch (event.keyCode) {
            case KeyCode.LEFT_ARROW:
                this.setActiveIndex(this.activeSlideIndex - 1);
                break;
            case KeyCode.RIGHT_ARROW:
                this.setActiveIndex(this.activeSlideIndex + 1);
                break;
        }
    }

}
