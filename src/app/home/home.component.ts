import { Component, DoCheck, HostBinding, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,DoCheck {
  actionName = 'Create and set an attribute';
  isSpecial = false;
  canSave = true;
  classExpression = 'special clearance';
  styleExpression = 'border: solid red 3px';
  color = 'blue';
  border = '.5rem dashed black';
  constructor() { }
  ngDoCheck(): void {
    console.log("logdocheck");
  }

  @HostBinding('style.color')
  colorInHome = 'red';


  ngOnInit() {
    this.colorInHome='blue';
  }

}
