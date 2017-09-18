import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-loading-indicator',
    template: `
        <div class="loading-indicator" [ngStyle]="{'width': size + 'px', 'height': size + 'px'}">
            <div class="spinner">
                <div class="double-bounce1"></div>
                <div class="double-bounce2"></div>
            </div>
        </div>
    `,
    styleUrls: ['./loading-indicator.component.scss']
})
export class LoadingIndicatorComponent implements OnInit {

    @Input() size: number = 40;

    constructor() {
    }

    ngOnInit() {
    }

}
