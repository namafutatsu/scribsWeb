import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Project, Note, Sitem, Sfile, Sfolder } from '../shared/models';
import { ProjectService } from '../shared/services/project.service';

@Component({
  moduleId: module.id,
  selector: 'sd-project',
  templateUrl: 'project.component.html',
  styleUrls: ['project.component.css']
})
export class ProjectComponent implements OnInit {
  project: Project;
  file: Sfile;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
    .switchMap((params: Params) => this.projectService.getProject(params['key']))
    .subscribe(project => {
      this.project = project;
    });
  }

  onFolderSelected(folder: Sfolder) {
    this.file = null;
  }

  onFileSelected(file: Sfile) {
    this.file = file;
  }

  onSaving(): void {
    if (this.project !== undefined) {
      this.projectService.update(this.project)
    }
  }

  clickNote(note: Note): void {
    note.status = (note.status + 2) % 3 - 1;
  }
}
