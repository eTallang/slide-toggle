import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideToggleGroupComponent } from './slide-toggle-group.component';
import { ToggleOptionComponent } from './toggle-option/toggle-option.component';
import { PillDirective } from './pill.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SlideToggleGroupComponent, ToggleOptionComponent, PillDirective],
  exports: [ SlideToggleGroupComponent, ToggleOptionComponent]
})
export class SlideToggleModule { }
