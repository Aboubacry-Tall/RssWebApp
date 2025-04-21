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

  getArticles(): Observable<Article[]>{
    return this.http.get<Article[]>(this.baseUrl + '/arricles');
  }

  getArticleBySourceId(sourceId: string): Observable<Article[]>{
    return this.http.get<Article[]>(this.baseUrl + '/articles/source/' + sourceId);
  }
}
