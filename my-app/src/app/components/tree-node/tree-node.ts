import { Component, Input } from '@angular/core';
import { LibraryNode } from '../../models/library-node';

@Component({
  selector: 'app-tree-node',
  standalone: true,
  imports: [TreeNodeComponent],
  templateUrl: './tree-node.html',
  styleUrls: ['./tree-node.css'],
})
export class TreeNodeComponent {
  @Input() node!: LibraryNode;
  @Input() searchTerm: string = '';

  expanded = false;

  toggle(): void {
    this.expanded = !this.expanded;
  }

  isMatched(name: string): boolean {
    if (!this.searchTerm) return false;
    return name.toLowerCase().includes(this.searchTerm.toLowerCase());
  }

  highlightText(text: string): string {
    if (!this.searchTerm) return text;
    const re = new RegExp(`(${this.escapeRegex(this.searchTerm)})`, 'gi');
    return text.replace(re, '<mark>$1</mark>');
  }

  private escapeRegex(s: string): string {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}
