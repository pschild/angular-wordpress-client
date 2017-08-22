import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-tpl-gallery',
    templateUrl: './tpl-gallery.component.html',
    styleUrls: ['./tpl-gallery.component.scss']
})
export class TplGalleryComponent implements OnInit {

    @Input() pageData: any;

    constructor() {
    }

    ngOnInit() {
    }

}
