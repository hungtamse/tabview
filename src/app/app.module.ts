import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabviewComponent } from './tabview/tabview.component';
import { PanelComponent } from './panel/panel.component';

@NgModule({
  declarations: [
    AppComponent,
    TabviewComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
