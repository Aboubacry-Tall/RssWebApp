import { Component, signal } from '@angular/core';
import { SourceService } from '../../modules/source/source.service';
import { Source } from '../../modules/source/source.model';
import { Article } from '../../modules/article/article.model';
import { ArticleService } from '../../modules/article/article.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  sources = signal<Source[]>([]);
  articlesBySource = signal<Map<string, Article[]>>(new Map());
  window = signal<Map<string, boolean>>(new Map());
  language: string = "fr";

  constructor(public sourceService: SourceService, public articleService: ArticleService) { }

  ngOnInit() {
    if (typeof window !== 'undefined' && window.localStorage) {
      this.language = localStorage.getItem("language") ?? 'fr';  
    } 
    this.getSources();
  }

  getSources() {
    this.sourceService.getSources(this.language).subscribe((data) => {
      console.log(data);
      this.sources.set(data);
      data.forEach(source => this.getArticlesBySourceId(source.id));
    });
  }

  getArticlesBySourceId(sourceId: string) {
    this.articleService.getArticleBySourceId(sourceId, this.language).subscribe((data) => {
      const currentMap = this.articlesBySource();
      currentMap.set(sourceId, data);
      this.articlesBySource.set(currentMap);
    });
  }

  // Utils
  redirectTo(url: string) {
    window.open(url, '_blank');
  }
}