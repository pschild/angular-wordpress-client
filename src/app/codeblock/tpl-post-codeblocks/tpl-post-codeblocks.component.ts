import {Component, OnInit} from '@angular/core';
import {TemplateComponent} from "../../core/template/template.component";

@Component({
    selector: 'app-tpl-post-codeblocks',
    template: `
        <app-content-with-codeblock [postItem]="data"></app-content-with-codeblock>
    `,
    styleUrls: ['./tpl-post-codeblocks.component.scss']
})
export class TplPostCodeblocksComponent extends TemplateComponent implements OnInit {

    constructor() {
        super();
    }

    ngOnInit() {
        super.ngOnInit();
    }

}
