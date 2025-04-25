import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pub } from './pub.model';

@Injectable({
  providedIn: 'root'
})
export class PubService {

  private baseUrl = environment.api + environment.rssPath + '/news';
  constructor(private http: HttpClient) {}

  getPubs(): Observable<Pub[]>{
    return this.http.get<Pub[]>(this.baseUrl + '/pubs');
  }

  getPrimaryPub(): Observable<Pub>{
    return this.http.get<Pub>(this.baseUrl + '/pub/primary');
  }

  getSecondaryPub(): Observable<Pub>{
    return this.http.get<Pub>(this.baseUrl + '/pub/secondary');
  }

}
