import {Component, OnInit} from '@angular/core';
import {TemplateComponent} from "../../core/template/template.component";
import {ProjectService} from "../project-item/project.service";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'app-tpl-projects',
    template: `
        <div>FILTERCOMPONENT</div>
        <app-project-item *ngFor="let projectItem of projectItems$ | async" [projectItem]="projectItem"></app-project-item>
    `,
    styleUrls: ['./tpl-projects.component.scss']
})
export class TplProjectsComponent extends TemplateComponent implements OnInit {

    projectItems$: Observable<any>;

    constructor(private projectService: ProjectService) {
        super();
    }

    ngOnInit() {
        if (this.data.acf.project_ids) {
            this.projectItems$ = this.projectService.loadByIds(this.data.acf.project_ids);
        }
    }

}
