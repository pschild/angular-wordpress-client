import {Component, OnInit} from '@angular/core';
import {TemplateComponent} from "../../template.component";

@Component({
    selector: 'app-tpl-text-gallery',
    template: `
        <p [innerHtml]="data.acf.content | safeHtml"></p>
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
