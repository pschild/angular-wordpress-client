import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-tpl-gallery',
    template: `
        <app-gallery [items]="pageData.acf.gallery_images" [activeItemId]="params.imageId"></app-gallery>
    `,
    styleUrls: ['./tpl-gallery.component.scss']
})
export class TplGalleryComponent implements OnInit {

    @Input() pageData: any;
    @Input() params: any;

    constructor() {
    }

    ngOnInit() {
    }

}
