import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-navigation-tree',
    templateUrl: './navigation-tree.component.html',
    styleUrls: ['./navigation-tree.component.scss']
})
export class NavigationTreeComponent implements OnInit {

    @Input() items: Array<any> = [];

    constructor() {
    }

    ngOnInit() {
    }

}
