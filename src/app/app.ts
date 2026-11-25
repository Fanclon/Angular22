import { Component } from '@angular/core';
import { EpisodeSearch } from './episode-search/episode-search';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EpisodeSearch],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {}
