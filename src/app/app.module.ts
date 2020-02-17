import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TvShowInfoComponent } from './tv-show-info/tv-show-info.component';

@NgModule({
  declarations: [
    AppComponent,
    TvShowInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
