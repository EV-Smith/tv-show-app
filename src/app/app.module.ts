import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TvShowInfoComponent } from './tv-show-info/tv-show-info.component';
import { TvShowInfoService } from './tv-show-info.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TvShowInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TvShowInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
