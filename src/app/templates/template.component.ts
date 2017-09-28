import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-template',
    template: `nothing`,
    styles: []
})
export class TemplateComponent implements OnInit {

    @Input() data: any;
    @Input() params: any;

    constructor() {
    }

    ngOnInit() {
    }

}
