import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDislayShowsData } from './idisplay-shows-data';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IDisplayShows } from './idisplay-shows';

@Injectable({
  providedIn: 'root'
})
export class DisplayShowsService {

  constructor(private httpClient: HttpClient) { }

  getTVShow(searchText: string): Observable<IDisplayShows>{
    let uriParams = `${searchText}`;

    return this.httpClient.get<IDislayShowsData>(
      `${environment.baseUrl}api.tvmaze.com/singlesearch/shows?q=${uriParams}&appid=${environment.appID}`
    ).pipe(map(data => this.transformToITvShowData(data)))
  }
  private transformToITvShowData(data: IDislayShowsData) : IDisplayShows{
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
