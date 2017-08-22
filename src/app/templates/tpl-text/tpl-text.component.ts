import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-tpl-text',
    templateUrl: './tpl-text.component.html',
    styleUrls: ['./tpl-text.component.scss']
})
export class TplTextComponent implements OnInit {

    @Input() pageData: any;

    constructor() {
    }

    ngOnInit() {
    }

}
