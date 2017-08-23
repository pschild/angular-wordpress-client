import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

    @Input() items: Array<any> = [];
    @Input() activeItemId: number;

    constructor(private location: Location) {
    }

    ngOnInit() {
    }

    handleSelectionChange() {
        // pulls "/anyBasePage" out of "/anyBasePage/gallery/<imageId>"
        let basePath;
        if (this.location.path().indexOf('gallery') >= 0) {
            basePath = this.location.path().substr(0, this.location.path().indexOf('gallery') - 1);
        } else {
            basePath = this.location.path();
        }

        if (this.activeItemId < 0) {
            this.location.go(basePath);
        } else {
            this.location.go(`${basePath}/gallery/${this.activeItemId}`);
        }
    }

    getNextItem(index: number) {
        let nextIndex;
        if (index >= this.items.length - 1) {
            nextIndex = 0;
        } else {
            nextIndex = index + 1;
        }

        return this.items[nextIndex];
    }

    getPreviousItem(index: number) {
        let prevIndex;
        if (index === 0) {
            prevIndex = this.items.length - 1;
        } else {
            prevIndex = index - 1;
        }

        return this.items[prevIndex];
    }

}
