import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-apropos',
  templateUrl: './apropos.component.html',
  styleUrls: ['./apropos.component.css']
})
export class AproposComponent implements OnInit {
  isCardVisible: boolean = false;
  constructor() { }

  ngOnInit(): void {

  }
  addAnimationClass() {
    // add animation class to Div
    this.isCardVisible = true;
  }

}
