import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-tpl-text-gallery',
    template: `
        <p [innerHtml]="pageData.acf.content | safeHtml"></p>
        <app-gallery></app-gallery>
    `,
    styleUrls: ['./tpl-text-gallery.component.scss']
})
export class TplTextGalleryComponent implements OnInit {

    @Input() pageData: any;

    constructor() {
    }

    ngOnInit() {
    }

}
