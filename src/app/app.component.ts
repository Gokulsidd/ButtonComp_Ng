import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Button';
  Display = new Array<any>();

  clicks(args: any) {
    console.log('clicked', args);
  }
  mouseover() {
    console.log('mouse hovered');
  }
  dblClick() {
    console.log('dbl clicked');
  }
  mouseleave() {
    console.log('mouse left');
  }  
}
