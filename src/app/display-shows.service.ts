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

  getTVShow(searchText: string): Observable<IDisplayShows[]>{
    let uriParams = `${searchText}`;

    return this.httpClient.get<IDislayShowsData[]>(
      `${environment.baseUrl}api.tvmaze.com/search/shows?q=${uriParams}&appid=${environment.appID}`
    ).pipe(map(data => this.transformToITvShowData(data)))
  }

  private transformToITvShowData(data: IDislayShowsData[]) : IDisplayShows[]{
    
    let array = new Array();
    for (let i = 0; i < data.length; i++){
      
      array.push(new Object({
        image: data[i].show.image.original,
        name: data[i].show.name,
        language: data[i].show.language,
        genres: data[i].show.genres,
        runtime: data[i].show.runtime,
        premiered: data[i].show.premiered,
        status: data[i].show.status,
        summary: data[i].show.summary,
        time: data[i].show.schedule.time,
        days: data[i].show.schedule.days
      }))

      return (array)
    }
  }
}
