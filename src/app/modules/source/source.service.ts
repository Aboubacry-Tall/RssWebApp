import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Source } from './source.model';

@Injectable({
  providedIn: 'root'
})
export class SourceService {
  private baseUrl = environment.api + environment.rssPath + '/news';
  constructor(private http: HttpClient) {}

  getSources(): Observable<Source[]>{
    return this.http.get<Source[]>(this.baseUrl + '/sources');
  }
}
