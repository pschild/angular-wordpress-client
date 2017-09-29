import {Component, OnInit} from '@angular/core';
import {TemplateComponent} from "../../core/template/template.component";

@Component({
    selector: 'app-tpl-text',
    template: `
        <h1>{{data.title.rendered}}</h1>
        <p [innerHtml]="data.acf.content | safeHtml"></p>
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
