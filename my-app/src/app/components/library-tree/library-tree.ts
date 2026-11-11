import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LibraryService } from '../../services/library';
import { LibraryNode } from '../../models/library-node';
import { TreeNodeComponent } from '../tree-node/tree-node';

@Component({
  selector: 'app-library-tree',
  standalone: true,
  imports: [FormsModule, TreeNodeComponent],
  templateUrl: './library-tree.html',
  styleUrls: ['./library-tree.css'],
})
export class LibraryTreeComponent implements OnInit {
  tree: LibraryNode[] = [];
  searchTerm = '';

  constructor(private libraryService: LibraryService) {}

  ngOnInit(): void {
    this.tree = this.libraryService.getTree();
  }

  countMatches(nodes: LibraryNode[]): number {
    if (!this.searchTerm) return 0;
    const term = this.searchTerm.toLowerCase();
    let count = 0;

    const walk = (list: LibraryNode[]) => {
      for (const n of list) {
        if (n.name.toLowerCase().includes(term)) count++;
        if (n.children) walk(n.children);
      }
    };
    walk(nodes);
    return count;
  }
}
