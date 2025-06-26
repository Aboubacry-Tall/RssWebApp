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
  loading = signal<boolean>(false);
  language: string = "ar";
  constructor(private route: ActivatedRoute, private articleService: ArticleService) { }

  ngOnInit() {
    if (typeof window !== 'undefined' && window.localStorage) {
      this.language = localStorage.getItem("language") ?? 'ar';  
    } 
    this.sourceId = this.route.snapshot.params['id'];
    this.getArticlesBySourceId(this.sourceId.toString());
  }

  getArticlesBySourceId(sourceId: string) {
    this.loading.set(true);
    this.articleService.getArticleBySourceId(sourceId, this.language).subscribe((data) => {
      this.articles.set(data);
      this.loading.set(false);
    });
  }

  // Utils
  redirectTo(article: Article) {
    this.articleService.updateArticleVisits(article);
    window.open(article.content_url, '_blank');
  }
}
