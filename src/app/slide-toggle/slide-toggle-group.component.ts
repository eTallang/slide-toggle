import { Component, QueryList, AfterViewInit, Input, ContentChildren } from '@angular/core';
import { ToggleOptionComponent } from './toggle-option/toggle-option.component';

@Component({
  selector: 'app-slide-toggle-group',
  templateUrl: './slide-toggle-group.component.html',
  styleUrls: ['./slide-toggle-group.component.scss']
})
export class SlideToggleGroupComponent implements AfterViewInit {
  @Input() value: string;
  @ContentChildren(ToggleOptionComponent) options: QueryList<ToggleOptionComponent>;
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
