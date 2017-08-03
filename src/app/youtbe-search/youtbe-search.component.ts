import { SearchResult } from '../search-result/search-result.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtbe-search',
  templateUrl: './youtbe-search.component.html',
  styleUrls: ['./youtbe-search.component.css'],
})
export class YoutbeSearchComponent implements OnInit {
  results: SearchResult[];
  loading: boolean;

  constructor() {}

  ngOnInit() {}

  updateResults(results: SearchResult[]): void {
    this.results = results;
  }
}
