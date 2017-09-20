import {Component, Input, OnInit} from '@angular/core';
import {PostService} from "../../../post/post.service";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/forkJoin";

@Component({
    selector: 'app-tpl-posts',
    template: `
        <app-post-preview *ngFor="let postItem of postItems$ | async" [postItem]="postItem"></app-post-preview>
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
