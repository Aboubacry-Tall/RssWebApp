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
  items = [1, 2, 3, 4, 5, 6, 7];
  sources = signal<Source[]>([]);
  articlesBySource = signal<Map<string, Article[]>>(new Map());
  window = signal<Map<string, boolean>>(new Map());

  constructor(public sourceService: SourceService, public articleService: ArticleService) { }

  ngOnInit() {
    this.getSources();
  }

  getSources() {
    this.sourceService.getSources().subscribe((data) => {
      this.sources.set(data);
      data.forEach(source => this.getArticlesBySourceId(source.id));
    });
  }

  getArticlesBySourceId(sourceId: string) {
    this.articleService.getArticleBySourceId(sourceId).subscribe((data) => {
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