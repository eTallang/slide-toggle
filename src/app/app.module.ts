import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SlideToggleModule } from './slide-toggle/slide-toggle.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    SlideToggleModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
