import { Component, OnInit } from '@angular/core';
import { LandPlot } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-land',
  templateUrl: './land.component.html',
  styleUrls: ['./land.component.css']
})
export class LandComponent implements OnInit {
  plots: LandPlot[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getPlots().subscribe(p => this.plots = p);
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
