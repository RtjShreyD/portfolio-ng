import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-progress',
  templateUrl: './skill-progress.component.html',
  styleUrls: ['./skill-progress.component.scss']
})
export class SkillProgressComponent implements OnInit {

  techStack = {
    viewSkillBars: true,
    experience: [
      {
        Stack: "Backend development and system design",
        progressPercentage: "80%"
      },
      {
        Stack: "Frontend/Design",
        progressPercentage: "60%"
      },
      {
        Stack: "DevOps",
        progressPercentage: "50%"
      },
      {
        Stack: "IOT and electronics",
        progressPercentage: "60%"
      },
      {
        Stack: "MachineLearning/AI",
        progressPercentage: "30%"
      }

    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

  progressStyle(percentage:string){
    return {    width: percentage}
  }

}
