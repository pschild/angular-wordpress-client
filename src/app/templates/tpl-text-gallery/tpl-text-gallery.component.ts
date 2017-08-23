import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-tpl-text-gallery',
    template: `
        <p [innerHtml]="pageData.acf.content | safeHtml"></p>
        <app-gallery [items]="pageData.acf.gallery_images" [activeItemId]="params.imageId"></app-gallery>
    `,
    styleUrls: ['./tpl-text-gallery.component.scss']
})
export class TplTextGalleryComponent implements OnInit {

    @Input() pageData: any;
    @Input() params: any;

    constructor() {
    }

    ngOnInit() {
    }

}
