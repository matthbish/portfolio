import { Component, OnInit } from '@angular/core';
import { Project } from './models/app.models';
import { RRG, RTC } from './constants/app.constants';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  projects: Project[] = [];

  constructor(private http: HttpClient) {}
  
  ngOnInit(): void {
    [RRG, RTC].forEach(project => {
      this.http.get(project.description, { responseType: 'text' }).subscribe(data => {
        project.description = data;
        this.projects.push(project);
      });
    });
  }
  
}