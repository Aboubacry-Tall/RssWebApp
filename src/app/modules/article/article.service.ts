import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Article } from './article.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private baseUrl = environment.api + environment.rssPath + '/news';
  constructor(private http: HttpClient) {}

  getArticleBySourceId(sourceId: string, language: string): Observable<Article[]>{
    return this.http.get<Article[]>(this.baseUrl + '/articles/source/' + sourceId + '/' + language);
  }

  updateArticleVisits(article: Article): Observable<Article> {
    const url = `${this.baseUrl}/articles/${article.id}/views`;
    return this.http.put<Article>(url, article);
  }

  getArticleByCategory(category: string, language: string): Observable<Article[]>{
    return this.http.get<Article[]>(this.baseUrl + '/articles/category/' + category + '/' + language);
  }

  getArticlesWassat(language: string): Observable<Article[]>{
    return this.http.get<Article[]>(this.baseUrl + '/articles/wassat/' + language);
  }

  getArticleById(articleId: string): Observable<Article>{
    return this.http.get<Article>(this.baseUrl + '/articles/' + articleId);
  }
}