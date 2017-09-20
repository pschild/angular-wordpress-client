import {Component, Input, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {MediaService} from "../../media.service";

@Component({
    selector: 'app-post-preview',
    template: `
        <article class="row">
            <div class="col-lg-3 col-md-4 col-sm-5 col-xs-12">
                <img class="article-image" *ngIf="postImageUrl$ | async; let postImageUrl" [src]="postImageUrl"/>
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

    postImageUrl$: Observable<any>;

    constructor(private mediaService: MediaService) {
    }

    ngOnInit() {
        this.postImageUrl$ = this.mediaService.loadByIds([this.postItem.acf.gallery_images[0]]).map(images => images[0].source_url);
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
