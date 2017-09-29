import {Component, OnDestroy, OnInit} from '@angular/core';
import {PageService} from "./page.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit, OnDestroy {

    pageData$: Observable<any>;

    params: Params = null;

    private subscription: Subscription;

    constructor(private route: ActivatedRoute, private pageService: PageService) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.params = params;
            this.pageData$ = this.pageService.loadBySlug(params.shortTitle);
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

}
