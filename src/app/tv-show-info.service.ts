import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITvShowData } from './itv-show-data';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ITvShowInfo } from './itv-show-info';

@Injectable({
  providedIn: 'root'
})
export class TvShowInfoService {

  constructor(private httpClient: HttpClient) { }

  getTVShow(name: string): Observable<ITvShowInfo>{
    return this.httpClient.get<ITvShowData>(
      `${environment.baseUrl}api.tvmaze.com/singlesearch/shows?q=${name}&appid=${environment.appID}`
    ).pipe(map(data => this.transformToITvShowData(data)))
  }
  private transformToITvShowData(data: ITvShowData) : ITvShowInfo{
    return {
      image: data.image.original,
      name: data.name,
      language: data.language,
      genres: data.genres,
      runtime: data.runtime,
      premiered: data.premiered,
      status: data.status,
      summary: data.summary,
      time: data.schedule.time,
      days: data.schedule.days,
    }
  }
}
