import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-tpl-text-gallery',
    templateUrl: './tpl-text-gallery.component.html',
    styleUrls: ['./tpl-text-gallery.component.scss']
})
export class TplTextGalleryComponent implements OnInit {

    @Input() pageData: any;

    constructor() {
    }

    ngOnInit() {
    }

}
