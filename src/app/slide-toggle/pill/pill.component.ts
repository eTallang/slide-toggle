import { Component, Input, HostBinding, ViewEncapsulation } from '@angular/core';

import { ToggleOptionComponent } from '../toggle-option/toggle-option.component';

@Component({
  selector: 'app-pill',
  templateUrl: './pill.component.html',
  styleUrls: ['./pill.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PillComponent {
  @Input() selectedOption: ToggleOptionComponent;
  @HostBinding('class.toggle-group-pill') pillStyle = true;

  @HostBinding('style.width')
  get width(): string {
    if (this.selectedOption) {
      return `${this.selectedOption.width}px`;
    } else {
      return '0px';
    }
  }

  @HostBinding('style.transform')
  get offset(): string {
    if (this.selectedOption) {
      return `translateX(${this.selectedOption.offset}px)`;
    } else {
      return `translateX(0px)`;
    }
  }
}
