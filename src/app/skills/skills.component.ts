import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillsSection = {
    title: "What I do💁‍♂️",
    subTitle: "CRAZY FULL STACK & IOT DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    skills: [
      "⚡ Design scalable systems with end to end Tech Stack Management",
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications",
      "⚡ Creating application backend in Node, Express, Flask, Django",
      "⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks",
      "⚡ Integration of third party services such as Firebase/ Heroku/ AWS",
      "⚡ Experience of working with Computer Vision and Internet Of Things projects"
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
