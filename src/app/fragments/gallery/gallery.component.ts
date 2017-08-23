import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

    @Input() items: Array<any> = [];
    @Input() activeItemId: number;

    constructor() {
    }

    ngOnInit() {
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
