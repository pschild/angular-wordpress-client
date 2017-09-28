import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProjectItemComponent} from './project-item.component';

describe('ProjectDetailComponent', () => {
    let component: ProjectItemComponent;
    let fixture: ComponentFixture<ProjectItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProjectItemComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProjectItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
