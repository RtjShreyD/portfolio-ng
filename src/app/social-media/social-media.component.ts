import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
  socialMediaLinks = {

    github: "https://github.com/rtjshreyd",
    linkedin: "https://www.linkedin.com/in/shreyans-dube-b09b21136/",
    gmail: "shreyanshdube2@gmail.com",
    instagram : "https://www.instagram.com/a.mystic.wanderer/"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
