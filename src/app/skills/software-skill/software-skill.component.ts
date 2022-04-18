import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-software-skill',
  templateUrl: './software-skill.component.html',
  styleUrls: ['./software-skill.component.scss']
})
export class SoftwareSkillComponent implements OnInit {
  skillsSection = {
    softwareSkills: [
      {
        skillName: "python",
        fontAwesomeClassname: "fab fa-python"
      },
      {
        skillName: "JavaScript",
        fontAwesomeClassname: "fab fa-js"
      },
      {
        skillName: "Angularjs",
        fontAwesomeClassname: "fab fa-angular"
      },
      {
        skillName: "nodejs",
        fontAwesomeClassname: "fab fa-node"
      },
      {
        skillName: "react",
        fontAwesomeClassname: "fa-brands fa-react"
      },
      {
        skillName: "html-5",
        fontAwesomeClassname: "fab fa-html5"
      },
      {
        skillName: "css3",
        fontAwesomeClassname: "fab fa-css3-alt"
      },
      {
        skillName: "aws",
        fontAwesomeClassname: "fa-brands fa-aws"
      },
      {
        skillName: "sql-database",
        fontAwesomeClassname: "fas fa-database"
      },
      {
        skillName: "git",
        fontAwesomeClassname: "fa-brands fa-git"
      },
      {
        skillName: "docker",
        fontAwesomeClassname: "fa-brands fa-docker"
      },
      {
        skillName: "jenkins",
        fontAwesomeClassname: "fa-brands fa-jenkins"
      }


    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
