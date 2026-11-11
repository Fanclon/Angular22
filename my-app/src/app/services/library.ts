import { Injectable } from '@angular/core';
import { LibraryNode } from '../models/library-node';

@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  private data: LibraryNode[] = [
    {
      id: 1,
      name: 'Художественная литература',
      children: [
        {
          id: 11,
          name: 'Русская классика',
          children: [
            { id: 111, name: 'Война и мир' },
            { id: 112, name: 'Преступление и наказание' },
            { id: 113, name: 'Мастер и Маргарита' },
          ],
        },
        {
          id: 12,
          name: 'Зарубежная классика',
          children: [
            { id: 121, name: '1984' },
            { id: 122, name: 'О дивный новый мир' },
          ],
        },
      ],
    },
    {
      id: 2,
      name: 'Научная литература',
      children: [
        {
          id: 21,
          name: 'Физика',
          children: [
            { id: 211, name: 'Краткая история времени' },
            { id: 212, name: 'Квантовая механика' },
          ],
        },
        {
          id: 22,
          name: 'Программирование',
          children: [
            { id: 221, name: 'Чистый код' },
            { id: 222, name: 'Паттерны проектирования' },
            { id: 223, name: 'Angular в действии' },
          ],
        },
      ],
    },
    {
      id: 3,
      name: 'Детская литература',
      children: [
        { id: 31, name: 'Сказки Пушкина' },
        { id: 32, name: 'Приключения Незнайки' },
      ],
    },
  ];

  getTree(): LibraryNode[] {
    return this.data;
  }
}
