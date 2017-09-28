import {Component, OnInit} from '@angular/core';
import {PostService} from "../../../post/post.service";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/forkJoin";
import {TemplateComponent} from "../../template.component";

@Component({
    selector: 'app-tpl-posts',
    template: `
        <app-post-preview *ngFor="let postItem of postItems$ | async" [postItem]="postItem"></app-post-preview>
    `,
    styleUrls: ['./tpl-posts.component.scss']
})
export class TplPostsComponent extends TemplateComponent implements OnInit {

    postItems$: Observable<any>;

    constructor(private postService: PostService) {
        super();
    }

    ngOnInit() {
        if (this.data.acf.posts_of_categories) {
            this.postItems$ = this.postService.loadByCategoryIds(this.data.acf.posts_of_categories.map(category => category.term_id));
        }
    }

}
