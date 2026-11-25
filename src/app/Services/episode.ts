import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
}

@Injectable({ providedIn: 'root' })
export class EpisodeService {
  private apiUrl = 'https://rickandmortyapi.com/api/episode';

  private allEpisodes$?: Observable<Episode[]>;

  constructor(private http: HttpClient) {}

  getAllEpisodes(): Observable<Episode[]> {
    if (!this.allEpisodes$) {
      this.allEpisodes$ = this.http.get<{ results: Episode[] }>(this.apiUrl).pipe(
        map((res) => res.results),
        shareReplay(1),
      );
    }
    return this.allEpisodes$;
  }

  searchEpisodes(code: string): Observable<{ results: Episode[] }> {
    return this.http.get<{ results: Episode[] }>(this.apiUrl, {
      params: { episode: code },
    });
  }
}
