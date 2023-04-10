import { Component, OnInit } from '@angular/core';
import { Project } from './models/app.models';
import { CTG, RRG, RTC, SIMPLE_FOCUS } from './constants/app.constants';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  projects: Project[] = [];

  constructor(private http: HttpClient) {}
  
  ngOnInit(): void {
    [RRG, RTC, CTG, SIMPLE_FOCUS].forEach(project => {
      this.http.get(project.description, { responseType: 'text' }).subscribe(data => {
        project.description = data;
        this.projects.push(project);
      });
    });
  }
  
}