import {Component, OnDestroy, OnInit} from '@angular/core';
import {PageService} from "./page.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";
import {TplTextComponent} from "../../text/tpl-text/tpl-text.component";

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit, OnDestroy {

    pageData: null;

    params: Params = null;

    possibleTemplates = ['Text', 'Gallery'];
    inputs = {};
    components = [];

    private subscription: Subscription;

    constructor(private route: ActivatedRoute, private pageService: PageService) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.params = params;
            this.pageService.loadBySlug(params.shortTitle).subscribe(res => {
                // let foundTemplates = res.acf.content.match(/\[([A-Za-z]+)\]/g);
                // console.log(foundTemplates);
                // foundTemplates.map(tpl => {
                //     let tplName = tpl.replace('[', '').replace(']', '');
                //     let openingTagStartIndex = res.acf.content.indexOf(`[${tplName}]`);
                //     let closingTagStartIndex = res.acf.content.indexOf(`[/${tplName}]`);
                //     let contentBetween = res.acf.content.substring(openingTagStartIndex + tpl.length, closingTagStartIndex);
                // });

                let template = res.template;
                switch (template) {
                    case 'template-page-content.php':
                        this.components.push(TplTextComponent);
                        break;
                }
                this.inputs = {
                    data: res,
                    params: this.params
                };
                this.pageData = res;
            });
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

}
