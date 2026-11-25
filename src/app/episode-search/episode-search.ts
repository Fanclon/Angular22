import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import {
  debounceTime,
  switchMap,
  distinctUntilChanged,
  catchError,
  map,
  startWith,
  finalize,
  skip,
} from 'rxjs/operators';
import { Episode, EpisodeService } from '../Services/episode';
import { of } from 'rxjs';

@Component({
  selector: 'app-episode-search',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './episode-search.html',
  styleUrls: ['./episode-search.css'],
})
export class EpisodeSearch implements OnInit {
  searchControl = new FormControl('');
  loading = false;
  errorMessage = '';

  episodes$ = this.searchControl.valueChanges.pipe(
    startWith(''),
    skip(2),
    debounceTime(300),
    distinctUntilChanged(),
    switchMap((value: string | null) => {
      const term = (value ?? '').trim().toLowerCase();

      if (term.length < 3) {
        this.errorMessage = '';
        return of([] as Episode[]);
      }

      this.loading = true;
      this.errorMessage = '';

      return this.episodeService.getAllEpisodes().pipe(
        map((episodes) => episodes.filter((ep) => ep.name.toLowerCase().includes(term))),
        catchError(() => {
          this.errorMessage = 'Ошибка загрузки данных';
          return of([] as Episode[]);
        }),
        finalize(() => (this.loading = false)),
      );
    }),
  );
  constructor(private episodeService: EpisodeService) {}

  ngOnInit() {
    this.episodes$.pipe().subscribe((episodes) => {
      this.loading = false;
      const term = (this.searchControl.value ?? '').trim();
      if (term.length >= 3 && episodes.length === 0 && !this.errorMessage) {
        this.errorMessage = 'Ничего не найдено';
      } else if (term.length >= 3 && episodes.length > 0) {
        this.errorMessage = '';
      }
    });
  }
}
