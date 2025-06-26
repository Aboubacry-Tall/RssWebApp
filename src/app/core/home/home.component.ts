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
  source_id = '';
  leftSources = signal<Source[]>([]);
  rightSources = signal<Source[]>([]);
  sources = signal<Source[]>([]);
  articles = signal<Article[]>([]);
  articlesBySource = signal<Map<string, Article[]>>(new Map());
  window = signal<Map<string, boolean>>(new Map());
  language: string = "ar";

  constructor(public sourceService: SourceService, public articleService: ArticleService) { }

  ngOnInit() {
    
    if (typeof window !== 'undefined' && window.localStorage) {
      this.language = localStorage.getItem("language") ?? 'ar';  
    } 
    this.getSources();
    this.getElWassatArticles();
  }

    getSources() {
    this.sourceService.getSources(this.language).subscribe((data) => {
      const sortedSources = data.sort((a, b) => a.position - b.position);

      const left: any[] = [];
      const right: any[] = [];

      sortedSources.forEach((source, index) => {
        if (index % 2 === 0) {
          left.push(source); // index pair → gauche
        } else {
          right.push(source); // index impair → droite
        }
      });

      this.leftSources.set(left);
      this.rightSources.set(right);

      sortedSources.forEach(source => this.getArticlesBySourceId(source.id));
    });
  }


  getArticlesBySourceId(sourceId: string) {
    this.articleService.getArticleBySourceId(sourceId, this.language).subscribe((data) => {
      const currentMap = this.articlesBySource();
      currentMap.set(sourceId, data);
      this.articlesBySource.set(currentMap);
    });
  }

  getElWassatArticles() {
    this.articles.set([]);
    this.articleService.getArticlesWassat(this.language).subscribe({
      next: (data) => {
        if (data && Array.isArray(data) && data.length > 0) {

          this.articles.set(data);
          this.source_id = this.articles()[0].source_id;
        }
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des articles:', error);
        this.articles.set([]);
      }
    });
  }
}