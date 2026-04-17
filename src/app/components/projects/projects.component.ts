import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(p => this.projects = p);
  }

  getStatusClass(status: string): string {
    const map: Record<string, string> = {
      'Coming Soon':       'status-soon',
      'Under Negotiation': 'status-negotiation',
      'Pre-Launch':        'status-prelunch',
      'Available':         'status-available'
    };
    return map[status] || 'status-soon';
  }
}
