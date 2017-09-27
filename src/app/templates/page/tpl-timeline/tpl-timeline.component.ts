import {Component, Input, OnInit} from '@angular/core';
import {TimelineService} from "../../../fragments/timeline-item/timeline.service";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'app-tpl-timeline',
    template: `
        <app-timeline-item *ngFor="let timelineItem of timelineItems$ | async" [timelineItem]="timelineItem"></app-timeline-item>
    `,
    styleUrls: ['./tpl-timeline.component.scss']
})
export class TplTimelineComponent implements OnInit {

    @Input() pageData: any;
    @Input() params: any;

    timelineItems$: Observable<any>;

    constructor(private timelineService: TimelineService) {
    }

    ngOnInit() {
        this.timelineItems$ = this.timelineService.loadAll().map((data) => {
            data.sort((a, b) => {
                return a.acf.date_from > b.acf.date_from ? -1 : 1;
            });
            return data;
        });
    }

}
