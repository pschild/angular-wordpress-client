import {Component, Input, OnInit} from '@angular/core';
import {PostService} from "../../../post/post.service";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'app-tpl-posts',
    template: `
        <article *ngFor="let postItem of postItems$ | async">
            <h2>{{postItem.title.rendered}}</h2>
            <p [innerHtml]="postItem.acf.content | safeHtml"></p>
            <a routerLink="./post/{{postItem.id}}">mehr</a>
        </article>
    `,
    styleUrls: ['./tpl-posts.component.scss']
})
export class TplPostsComponent implements OnInit {

    @Input() pageData: any;
    @Input() params: any;

    postItems$: Observable<any>;

    constructor(private postService: PostService) {
    }

    ngOnInit() {
        if (this.pageData.acf.posts_of_categories) {
            this.postItems$ = this.postService.loadByCategoryIds(this.pageData.acf.posts_of_categories.map(category => category.term_id));
        }
    }

}
