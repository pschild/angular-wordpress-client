import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-tpl-gallery',
    template: `
        <app-gallery [items]="pageData.acf.gallery_images"></app-gallery>
    `,
    styleUrls: ['./tpl-gallery.component.scss']
})
export class TplGalleryComponent implements OnInit {

    @Input() pageData: any;

    constructor() {
    }

    ngOnInit() {
    }

}
