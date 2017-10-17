import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-navigation-tree',
    templateUrl: './navigation-tree.component.html',
    styleUrls: ['./navigation-tree.component.scss']
})
export class NavigationTreeComponent implements OnInit {

    @Input() items: Array<any> = [];

    @Output() linkClickedEvent = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    handleLinkClicked(item) {
        this.linkClickedEvent.emit(item);
    }

}
