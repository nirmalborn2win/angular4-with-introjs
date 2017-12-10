import { Component, OnInit } from '@angular/core';
import {introJs} from 'intro.js/intro.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { 
   
  }

  ngOnInit() {
this.startIntro();
  }
  startIntro(){
    let intro = introJs();
    // Initialize steps
    intro.setOptions({
        steps: [
          {
            intro: "Welcome to Intro JS! It just tells you how a page is guided for a user",
            position: 'left'
        }, {
            element: '#heading1',
            intro: "Tells you more about Intro JS",
            position: 'right'
        },
        {
          element: '#developer',
          intro: "Tells about the developer, on click of it , navigates for futher developer details",
          position: 'right'
      },
      {
        element: '#testing',
        intro: "Tells about the testing, on click of it , navigates for futher testing details",
        position: 'top'
    },
            
        ]
    });
    
    // Start tutorial
    intro.start();
  
}
}
