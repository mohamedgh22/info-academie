import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {
  isCardVisible: boolean = false;
  constructor() {
  }

  addAnimationClass() {
    // add animation class to Div
    this.isCardVisible = true;
  }

  ngOnInit(): void {



  }

}
