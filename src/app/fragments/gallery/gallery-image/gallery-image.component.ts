import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-gallery-image',
    templateUrl: './gallery-image.component.html',
    styleUrls: ['./gallery-image.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class GalleryImageComponent implements OnInit {

    @Input() item: any;

    hasLoaded: boolean = false;

    constructor() {
    }

    ngOnInit() {
    }

    onImageLoaded() {
        this.hasLoaded = true;
    }

}
