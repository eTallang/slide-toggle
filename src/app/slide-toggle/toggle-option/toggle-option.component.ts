import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { SlideToggleGroupComponent } from '../slide-toggle-group.component';

@Component({
  selector: 'app-toggle-option',
  templateUrl: './toggle-option.component.html',
  styleUrls: ['./toggle-option.component.scss']
})
export class ToggleOptionComponent {
  @ViewChild('button') option: ElementRef<HTMLButtonElement>;
  @Input() value: string;
  selected = false;

  get width(): number {
    return this.option.nativeElement.clientWidth;
  }

  get offset(): number {
    return this.option.nativeElement.offsetLeft;
  }

  group: SlideToggleGroupComponent;

  setSelected(): void {
    this.group.setSelectedOption(this.value);
  }
}
