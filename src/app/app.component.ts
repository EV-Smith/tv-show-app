import { Component } from '@angular/core';
import { IDisplayShows } from './idisplay-shows';
import { DisplayShowsService } from './display-shows.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TV Search';

  currentShowSearch: IDisplayShows[];

  constructor(private displayShowsService: DisplayShowsService){}

  doSearch(searchValue){
  const userInput = searchValue;
    this.displayShowsService.getTVShow(userInput).subscribe 
      (data => this.currentShowSearch = data);
  } 
}
