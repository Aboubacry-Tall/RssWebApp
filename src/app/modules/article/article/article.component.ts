import { Component, signal } from '@angular/core';
import { Article } from '../article.model';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article',
  standalone: false,
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {
  source_id = '';
  articles = signal<Article[]>([]);
  articleId = 0;
  article = signal<Article>({} as Article);
  loading = signal<boolean>(false);
  language: string = "fr";
  constructor(private route: ActivatedRoute, private articleService: ArticleService) { }

  ngOnInit() {
    if (typeof window!== 'undefined' && window.localStorage) {
      this.language = localStorage.getItem("language")?? 'fr';
    }
    this.articleId = this.route.snapshot.params['id'];
    this.getArticleById(this.articleId.toString());
    this.getElWassatArticles();
  }

  getArticleById(articleId: string) {
    this.loading.set(true);
    this.articleService.getArticleById(articleId).subscribe((data) => {
      this.article.set(data);
      this.loading.set(false);
    });
  }

  getElWassatArticles() {
    this.articles.set([]);
    this.articleService.getArticlesWassat(this.language).subscribe({
      next: (data) => {
        if (data && Array.isArray(data)) {

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

  // Utils
  redirectToSource() {

  }
  shareArticle() {
    
  }
}
