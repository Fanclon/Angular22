import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LibraryTreeComponent } from './components/library-tree/library-tree';

@Component({
  imports: [LibraryTreeComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('my-app');
}
