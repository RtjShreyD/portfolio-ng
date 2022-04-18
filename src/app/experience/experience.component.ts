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
        companylogo: "https://res.cloudinary.com/freelance-work-rtj/image/upload/v1650305559/apyl_tkrjio.jpg",
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
        companylogo: "https://res.cloudinary.com/freelance-work-rtj/image/upload/v1650305560/morphedo_o0zqdq.png",
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
        companylogo: "https://res.cloudinary.com/freelance-work-rtj/image/upload/v1650305559/ebibil_epmxcp.png",
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
