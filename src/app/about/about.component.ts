import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/app.models';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  skills: Skill[] = [
    {
      label: 'Languages',
      arr: ['Java', 'Kotlin', 'TypeScript', 'JavaScript', 'HTML', 'CSS/SCSS', 'Python', 'SQL', 'R', 'C#', 'Assembly', 'C', 'F#', 'MATLAB']
    },
    {
      label: 'Frameworks',
      arr: ['Spring Boot', 'Axon', 'Angular', 'REST', 'MongoDB', 'RabbitMQ', 'React', 'Aeon', 'CICD', 'CQRS']
    },
    {
      label: 'Software',
      arr: ['IntelliJ', 'VS Code', 'Docker', 'Postman', 'Robo3T/Studio3T', 'Lens', 'Android Studio', 'Eclipse', 'NetBeans', 'Wireshark', 'Ubuntu', 'Unity']
    },
    {
      label: 'Operating Systems',
      arr: ['MacOS', 'Windows', 'Android', 'Linux', ]
    }
  ];

  summary = 'Welcome to my portfolio website!';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('../assets/summary.txt', { responseType: 'text' }).subscribe(data => {
      this.summary = data;
    });
  }
}
