import {
  Component,
  QueryList,
  AfterViewInit,
  Input,
  ContentChildren,
  HostBinding,
  ViewEncapsulation,
  Output,
  EventEmitter,
  OnChanges
} from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

import { ToggleOptionComponent } from './toggle-option/toggle-option.component';

@Component({
  selector: 'app-slide-toggle-group',
  templateUrl: './slide-toggle-group.component.html',
  styleUrls: ['./slide-toggle-group.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SlideToggleGroupComponent implements OnChanges, AfterViewInit {
  @Input()
  value: string;

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(disabled: boolean) {
    this._disabled = coerceBooleanProperty(disabled);
  }
  private _disabled = false;

  @Output()
  selectionChange = new EventEmitter<string>();

  @ContentChildren(ToggleOptionComponent)
  options: QueryList<ToggleOptionComponent>;

  @HostBinding('class.toggle-button-container')
  buttonContainer = true;

  @HostBinding('class.disabled')
  get disabledStyle() { return this.disabled; }

  selectedOption: ToggleOptionComponent;

  ngAfterViewInit() {
    Promise.resolve().then(() => {
      this.setDisabledState();
      if (this.value && this.options && this.options.length) {
        this.selectedOption = this.options.find(option => option.value === this.value);
      } else if (this.options && this.options.length) {
        this.selectedOption = this.options.first;
      }
      this.selectedOption.selected = true;
      this.selectionChange.emit(this.selectedOption.value);

      this.options.forEach(option => (option.group = this));
    });
  }

  ngOnChanges() {
    if (this.options.length) {
      this.setDisabledState();
    }
  }

  setSelectedOption(value: string) {
    this.options.forEach(option => (option.selected = false));
    this.selectedOption = this.options.find(option => option.value === value);
    this.selectedOption.selected = true;
    this.selectionChange.emit(this.selectedOption.value);
  }

  private setDisabledState(): void {
    this.options.forEach(option => option.disabled = this.disabled);
  }
}
