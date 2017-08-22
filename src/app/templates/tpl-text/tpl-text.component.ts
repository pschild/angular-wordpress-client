import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-tpl-text',
    template: `
        <h1>{{pageData.title.rendered}}</h1>
        <p [innerHtml]="pageData.acf.content | safeHtml"></p>
    `,
    styleUrls: ['./tpl-text.component.scss']
})
export class TplTextComponent implements OnInit {

    @Input() pageData: any;

    constructor() {
    }

    ngOnInit() {
    }

}
