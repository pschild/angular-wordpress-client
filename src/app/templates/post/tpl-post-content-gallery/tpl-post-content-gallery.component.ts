import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-tpl-post-content-gallery',
    template: `
        <h2>{{postData.title.rendered}}</h2>
        <p [innerHtml]="postData.acf.content | safeHtml"></p>
    `,
    styleUrls: ['./tpl-post-content-gallery.component.scss']
})
export class TplPostContentGalleryComponent implements OnInit {

    @Input() postData: any;
    @Input() params: any;

    constructor() {
    }

    ngOnInit() {
    }

}
