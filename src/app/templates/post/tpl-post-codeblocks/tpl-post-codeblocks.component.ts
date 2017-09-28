import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-tpl-post-codeblocks',
    template: `
        <app-content-with-codeblock [postItem]="postData"></app-content-with-codeblock>
    `,
    styleUrls: ['./tpl-post-codeblocks.component.scss']
})
export class TplPostCodeblocksComponent implements OnInit {

    @Input() postData: any;
    @Input() params: any;

    constructor() {
    }

    ngOnInit() {
    }

}
