import { Input, HostBinding, OnChanges, Directive } from '@angular/core';

import { ToggleOptionComponent } from './toggle-option/toggle-option.component';

@Directive({
  selector: 'app-pill'
})
export class PillDirective implements OnChanges {
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
