import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../article/article.model';
import { ArticleService } from '../../article/article.service';

@Component({
  selector: 'app-source',
  standalone: false,
  templateUrl: './source.component.html',
  styleUrl: './source.component.scss'
})
export class SourceComponent {
  sourceId = 0;
  articles = signal<Article[]>([]);
  language: string = "fr";
  constructor(private route: ActivatedRoute, private articleService: ArticleService) { }

  ngOnInit() {
    if (typeof window !== 'undefined' && window.localStorage) {
      this.language = localStorage.getItem("language") ?? 'fr';  
    } 
    this.sourceId = this.route.snapshot.params['id'];
    this.getArticlesBySourceId(this.sourceId.toString());
  }

  getArticlesBySourceId(sourceId: string) {
    this.articleService.getArticleBySourceId(sourceId, this.language).subscribe((data) => {
      this.articles.set(data);
    });
  }

  // Utils
  redirectTo(article: Article) {
    this.articleService.updateArticleVisits(article);
    window.open(article.content_url, '_blank');
  }
}
