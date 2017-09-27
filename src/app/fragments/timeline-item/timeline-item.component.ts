import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-timeline-item',
    templateUrl: './timeline-item.component.html',
    styleUrls: ['./timeline-item.component.scss']
})
export class TimelineItemComponent implements OnInit {

    @Input() timelineItem: any;

    constructor() {
    }

    ngOnInit() {
    }

}
