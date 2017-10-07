import {Component, OnInit} from '@angular/core';
import {TemplateComponent} from "../../core/template/template.component";

@Component({
    selector: 'app-tpl-text',
    template: `
        <app-text [data]="data"></app-text>
    `,
    styleUrls: ['./tpl-text.component.scss']
})
export class TplTextComponent extends TemplateComponent implements OnInit {

    constructor() {
        super();
    }

    ngOnInit() {
    }

}
