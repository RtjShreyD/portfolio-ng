import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  timeline = [
    {
      heading: "B.Tech - Electronics and Communication Engineering",
      duration: "2017",
      subtitle: "Dr APJ Abdul Kalam Technical University, Lucknow, UP, India",
      content: "Successfully completed my B.tech in ECE from AKTU, Lucknow.",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    },
    {
      heading: "Higher Secondary(12th)",
      duration: "2013",
      subtitle: "CBSE Board",
      content: "Successfully completed my intermediate studies in 2013 from Tagore Public School, Prayagraj, UP, India.\n" +
        "Major: PCM.",
      className1: "mar-left",
      className2: "prt_about_learnbox_right"
    },
    {
      heading: "Secondary Stage(10th)",
      duration: "2011",
      subtitle: "CBSE Board",
      content: "Successfully completed my high school studies in 2011 from Tagore Public School, Prayagraj, UP, India.",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    }
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
