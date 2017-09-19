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

    getSourceUrl() {
        if (this.item.media_details.height > this.item.media_details.width) {
            return this.item.media_details.sizes.image_grid_portrait.source_url;
        } else {
            return this.item.media_details.sizes.image_grid_landscape.source_url;
        }
    }

    onImageLoaded() {
        this.hasLoaded = true;
    }

}
