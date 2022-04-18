import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  public workExperiences = {
    viewExperiences: true,
    experience: [
      {
        role: "Python Developer",
        company: "APYL Software Solutions Ltd",
        color: 'white',
        companylogo: "../../../assets/images/apyl.jpeg",
        date: "Present",
        // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        desc: "Python backend development and devops",
        // descBullets: [
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        // ]
      },
      {
        role: "Lead Engineer R&D",
        company: "Morphedo Technologies Pvt Ltd",
        color: 'white',
        companylogo: "../../../assets/images/morphedo.png",
        date: "Aug 2019 – September 2020",
        desc: "Product building, team building and management",
        // descBullets: [
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        // ]
      },
      {
        role: "Chief Technical Consultant",
        company: "EBibil Technologies Pvt Ltd",
        color: 'white',
        companylogo: "../../../assets/images/ebibil.png",
        date: "Dec 2018 – Present",
        desc: "Building startup ventures in logistics and ed-tech",
        },
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
