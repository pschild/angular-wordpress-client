import {Component, Input, OnInit} from '@angular/core';
import {KeyCode} from "../../enums/key-code.enum";
import {MediaService} from "../../media.service";

@Component({
    selector: 'app-media-slider',
    host: {'(window:keyup)': 'handleKeyDown($event)'},
    templateUrl: './media-slider.component.html',
    styleUrls: ['./media-slider.component.scss']
})
export class MediaSliderComponent implements OnInit {

    @Input() items: Array<any> = [];

    activeSlideIndex: number = 0;

    MIME_TYPE = MediaService.MIME_TYPE;

    constructor() {
    }

    ngOnInit() {
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
