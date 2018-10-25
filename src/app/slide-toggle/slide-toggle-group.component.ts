import { Component, QueryList, AfterViewInit, Input, ContentChildren, HostBinding, ViewEncapsulation } from '@angular/core';
import { ToggleOptionComponent } from './toggle-option/toggle-option.component';

@Component({
  selector: 'app-slide-toggle-group',
  templateUrl: './slide-toggle-group.component.html',
  styleUrls: ['./slide-toggle-group.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SlideToggleGroupComponent implements AfterViewInit {
  @Input() value: string;
  @ContentChildren(ToggleOptionComponent) options: QueryList<ToggleOptionComponent>;
  @HostBinding('class.toggle-button-container') buttonContainer = true;
  selectedOption: ToggleOptionComponent;

  ngAfterViewInit() {
    Promise.resolve().then(() => {
      if (this.value && this.options && this.options.length) {
        this.selectedOption = this.options.find(option => option.value === this.value);
      } else if (this.options && this.options.length) {
        this.selectedOption = this.options.first;
      }
      this.selectedOption.selected = true;
  
      this.options.forEach(option => option.group = this);
    })
  }

  setSelectedOption(value: string) {
    this.options.forEach(option => option.selected = false);
    this.selectedOption = this.options.find(option => option.value === value);
    this.selectedOption.selected = true;
  }
}
