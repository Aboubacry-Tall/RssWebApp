import { Component, signal } from '@angular/core';
import { Source } from '../source.model';
import { Article } from '../../article/article.model';
import { SourceService } from '../source.service';
import { ArticleService } from '../../article/article.service';

@Component({
  selector: 'app-sources',
  standalone: false,
  templateUrl: './sources.component.html',
  styleUrl: './sources.component.scss'
})
export class SourcesComponent {
  sources = signal<Source[]>([]);
  articlesBySource = signal<Map<string, Article[]>>(new Map());
  loading = signal<boolean>(false);
  language: string = 'fr';

  constructor(
    private sourceService: SourceService,
    private articleService: ArticleService
  ) {}

  ngOnInit() {
    if (typeof window !== 'undefined' && window.localStorage) {
      this.language = localStorage.getItem('language') ?? 'ar';
    }
    this.getSources();
  }

  getSources() {
    this.loading.set(true);
    this.sourceService.getSources(this.language).subscribe((data) => {
      this.sources.set(data);
      data.forEach(source => this.getArticlesBySourceId(source.id));
    });
  }

  getArticlesBySourceId(sourceId: string) {
    this.articleService.getArticleBySourceId(sourceId, this.language).subscribe((data) => {
      const currentMap = this.articlesBySource();
      currentMap.set(sourceId, data);
      this.articlesBySource.set(currentMap);
      if (this.sources().every(source => this.articlesBySource().has(source.id))) {
        this.loading.set(false);
      }
    });
  }

  redirectTo(article: Article) {
    this.articleService.updateArticleVisits(article);
    window.open(article.content_url, '_blank');
  }
}
