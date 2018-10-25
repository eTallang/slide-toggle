import { Component, Input, HostBinding, ViewEncapsulation, OnChanges } from '@angular/core';

import { ToggleOptionComponent } from '../toggle-option/toggle-option.component';

@Component({
  selector: 'app-pill',
  templateUrl: './pill.component.html',
  styleUrls: ['./pill.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PillComponent implements OnChanges {
  @Input() selectedOption: ToggleOptionComponent;
  @HostBinding('class.toggle-group-pill') pillStyle = true;
  @HostBinding('style.width') width: string;
  @HostBinding('style.transform') offset: string;

  ngOnChanges(): void {
    if (this.selectedOption) {
      this.offset = `translateX(${this.selectedOption.offset}px)`;
      this.width = `${this.selectedOption.width}px`;
    } else {
      this.offset = `translateX(0px)`;
      this.width = '0px';
    }
  }
}
