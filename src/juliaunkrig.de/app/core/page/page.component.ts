import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";
import {environment} from "../../../environments/environment";
import {PageService} from "ng-wordpress-services";

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit, OnDestroy {

    pageData$: Observable<any>;

    params: Params = null;

    private subscription: Subscription;

    constructor(private route: ActivatedRoute, private pageService: PageService, private router: Router) {
    }

    ngOnInit() {
        // workaround for default route: when no route given, navigate manually to the page defined in the environment.
        // This cannot be accomplished by the routes definition, because when defining routes, environment variables
        // cannot be read.
        this.route.url.subscribe(url => {
            if (!url.length) {
                this.router.navigate([`/${environment.homePageName}`]);
            }
        });

        this.subscription = this.route.params.subscribe(params => {
            this.params = params;
            this.pageData$ = this.pageService.loadBySlug(params.shortTitle);
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

}
