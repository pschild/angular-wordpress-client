import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {PostService} from "../../../post/post.service";

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

    postData$: Observable<any>;

    params: Params = null;

    private subscription: Subscription;

    constructor(private route: ActivatedRoute, private postService: PostService) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.params = params;
            this.postData$ = this.postService.loadById(params.postId);
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

}
