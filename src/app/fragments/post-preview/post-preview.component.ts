import {Component, Input, OnInit, ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'app-post-preview',
    template: `
        <article class="row">
            <div class="col-lg-3 col-md-4 col-sm-5 col-xs-12">
                <app-image [imageId]="postItem.acf.gallery_images[0]" [useAsBackground]="false"></app-image>
            </div>
            <div class="col-lg-9 col-md-8 col-sm-7 col-xs-12">
                <h2>{{postItem.title.rendered}}</h2>
                <p [innerHtml]="ellipsizeText(postItem.acf.content)  | safeHtml"></p>
                <a class="read-more" routerLink="./post/{{postItem.id}}">weiter &raquo;</a>
            </div>
        </article>
    `,
    styleUrls: ['./post-preview.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostPreviewComponent implements OnInit {

    @Input() postItem: any;

    constructor() {
    }

    ngOnInit() {
    }

    ellipsizeText(html) {
        let readMoreTagIndex = html.indexOf('<!--more-->');
        if (readMoreTagIndex < 0) {
            return html;
        }
        let excerpt = html.substr(0, readMoreTagIndex);
        return html.length > readMoreTagIndex ? excerpt + '[...]' : excerpt;
    }

}
