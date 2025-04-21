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
  constructor(private route: ActivatedRoute, private articleService: ArticleService) { }

  ngOnInit() {
    this.sourceId = this.route.snapshot.params['id'];
    this.getArticlesBySourceId(this.sourceId.toString());
  }

  getArticlesBySourceId(sourceId: string) {
    this.articleService.getArticleBySourceId(sourceId).subscribe((data) => {
      this.articles.set(data);
    });
  }

  // Utils
  redirectTo(url: string) {
    window.open(url, '_blank');
  }
}
