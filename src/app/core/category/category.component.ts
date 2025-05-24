import { Component, signal } from '@angular/core';
import { Article } from '../../modules/article/article.model';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../modules/article/article.service';

@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  category = 'politique';
  articles = signal<Article[]>([]);
  loading = signal<boolean>(false);
  language: string = "fr";
  constructor(private route: ActivatedRoute, private articleService: ArticleService) { }

  ngOnInit() {
    if (typeof window !== 'undefined' && window.localStorage) {
      this.language = localStorage.getItem("language") ?? 'fr';  
    } 
    this.category = this.route.snapshot.params['category'];
    this.getArticlesByCategory(this.category.toString());
  }

  getArticlesByCategory(category: string) {
    this.loading.set(true);
    this.articleService.getArticleByCategory(category, this.language).subscribe((data) => {
      console.log(data);
      this.articles.set(data);
      this.loading.set(false);
    });
  }

  redirectTo(article: Article) {
    this.articleService.updateArticleVisits(article);
    window.open(article.content_url, '_blank');
  }

}
