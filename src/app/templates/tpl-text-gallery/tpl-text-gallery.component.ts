import {Component, OnInit} from '@angular/core';
import {TemplateComponent} from "../../core/template/template.component";

@Component({
    selector: 'app-tpl-text-gallery',
    template: `
        <app-text [data]="data"></app-text>
        <app-tpl-gallery [data]="data" [params]="params"></app-tpl-gallery>
    `,
    styleUrls: ['./tpl-text-gallery.component.scss']
})
export class TplTextGalleryComponent extends TemplateComponent implements OnInit {

    constructor() {
        super();
    }

    ngOnInit() {
    }

}
