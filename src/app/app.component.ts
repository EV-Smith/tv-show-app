import { Component } from '@angular/core';
import { ITvShowInfo } from './itv-show-info';
import { TvShowInfoService } from './tv-show-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TV Search';

  currentShowSearch: ITvShowInfo;

  constructor(private tvShowInfoService: TvShowInfoService){}

  doSearch(searchValue){
  const userInput = searchValue;
    this.tvShowInfoService.getTVShow(userInput).subscribe 
      (data => this.currentShowSearch = data);
  } 
}
