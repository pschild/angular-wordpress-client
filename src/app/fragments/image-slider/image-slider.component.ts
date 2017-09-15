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

}
