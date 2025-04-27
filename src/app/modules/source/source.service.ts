import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Source } from './source.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SourceService {
  private baseUrl = environment.api + environment.rssPath + '/news';
  constructor(private http: HttpClient) {
  }

  getSources(language: string): Observable<Source[]>{
    return this.http.get<Source[]>(this.baseUrl + '/sources' + '/' + language);
  }
}
