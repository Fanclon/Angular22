import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-box.html',
  styleUrls: ['./search-box.css'],
})
export class SearchBoxComponent {
  /** Текущее значение поиска (вход) */
  @Input() value = '';

  /** Плейсхолдер */
  @Input() placeholder = 'Поиск...';

  /** Событие при изменении значения */
  @Output() valueChange = new EventEmitter<string>();

  /** Событие при очистке */
  @Output() cleared = new EventEmitter<void>();

  onInput(newValue: string): void {
    this.value = newValue;
    this.valueChange.emit(newValue);
  }

  clear(): void {
    this.value = '';
    this.valueChange.emit('');
    this.cleared.emit();
  }
}
