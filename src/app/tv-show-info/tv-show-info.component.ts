import { Component, OnInit } from '@angular/core';
import { ITvShowInfo } from '../itv-show-info';
import { TvShowInfoService } from '../tv-show-info.service';

@Component({
  selector: 'app-tv-show-info',
  templateUrl: './tv-show-info.component.html',
  styleUrls: ['./tv-show-info.component.css']
})
export class TvShowInfoComponent implements OnInit {
  current: ITvShowInfo
  constructor(private tvShowInfoService: TvShowInfoService) { 

  }
    
  ngOnInit() {
    this.tvShowInfoService.getTVShow('the-good-place').subscribe(data => this.current = data)
  }

}
