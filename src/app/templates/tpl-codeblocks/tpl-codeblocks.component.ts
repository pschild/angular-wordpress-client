import {Component, OnInit} from '@angular/core';
import {TemplateComponent} from "../../core/template/template.component";

@Component({
    selector: 'app-tpl-codeblocks',
    template: `
        <app-codeblock [postItem]="data"></app-codeblock>
    `,
    styleUrls: ['./tpl-codeblocks.component.scss']
})
export class TplCodeblocksComponent extends TemplateComponent implements OnInit {

    constructor() {
        super();
    }

    ngOnInit() {
        super.ngOnInit();
    }

}
