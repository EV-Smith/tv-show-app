import { Observable } from 'rxjs';
import { IDisplayShows } from './idisplay-shows'

export interface IDisplayShowsService {
  getTVShow(searchText: string): Observable<IDisplayShows[]>
}
