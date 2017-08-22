import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-tpl-gallery',
    template: `
        <app-gallery></app-gallery>
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
