import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Project } from './models/app.models';
import { CTG, NUTRITION_LABEL_READER, RRG, RRGv2, RTC, SIMPLE_FOCUS } from './constants/app.constants';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  projects: Project[] = [RRG, RRGv2, RTC, CTG, SIMPLE_FOCUS, NUTRITION_LABEL_READER];

  constructor(private http: HttpClient, private cdRef: ChangeDetectorRef) {}
  
  ngOnInit(): void {
    this.projects.forEach(project => {
      this.http.get(project.description, { responseType: 'text' }).subscribe(data => {
        project.description = data;
      });
    });
  }
}