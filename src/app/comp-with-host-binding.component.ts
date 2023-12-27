import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'comp-with-host-binding',
  template: 'I am a component!Click on me to get data fired from host listener',
})
export class CompWithHostBindingComponent {
  @HostBinding('class.special')
  isSpecial = true;

  @HostBinding('style.color')
  color = 'red';

  //click on i am a component to get this data.
  @HostListener('click') 
  onclick(){
    alert('hello');
  }
  @HostBinding('style.width')
  width = '200px';
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/