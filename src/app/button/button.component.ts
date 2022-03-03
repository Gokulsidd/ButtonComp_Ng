import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'GK-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() value: any;
  @Input() classList: any;
  @Output() click = new EventEmitter<any>();
  @Output() dblclick = new EventEmitter<any>();
  @Output() mouseEnter = new EventEmitter<any>();
  @Output() mouseLeave = new EventEmitter<any>();

  className = 'btn';
  count = 0;
  counter = 0;

  constructor() {}

  ngOnInit(): void {}

  clicks() {
    this.click.emit({ eve: 'click', data: this.className });
  }
  mouseover() {
    this.mouseEnter.emit('mouse hover');
  }
  dblClick() { 
    this.dblclick.emit();
  }
  mouseleave() {
    this.mouseLeave.emit('mouse leave');
  }
}
