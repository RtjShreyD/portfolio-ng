import { Component, OnInit } from '@angular/core';
import {Apollo} from "apollo-angular";
import gql from 'graphql-tag';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects2 = [];
  projects3 = [
    {
      link: "https://github.com/RtjShreyD/iot-flask-redis-sse",
    },
    {
      link: "",
    },
    {
      link: "https://github.com/RtjShreyD/Digital-Marketplace_DApp",
    },
    {
      link:""
    },
    {

      link: "https://github.com/RtjShreyD/fabric-remote-shell",
    },
    {
      link: "https://github.com/RtjShreyD/Reverse_Shell_Python_sockets",

    }
  ]
  constructor(public apollo: Apollo) { }

  ngOnInit(): void {


    this.apollo.query<any>({
      query: gql`
      {
      user(login: "rtjshreyd") {
        pinnedItems(first: 6, types: [REPOSITORY]) {
          totalCount
          edges {
            node {
              ... on Repository {
                name
                description
                forkCount
                stargazers {
                  totalCount
                }
                url
                id
                diskUsage

                primaryLanguage {
                  name
                  color
                }
              }
            }
          }
        }
      }
    }
      `
    }).subscribe((data) => {
      this.projects2 = data.data.user.pinnedItems.edges;
      // console.log(this.projects2);
    });
  }

}
