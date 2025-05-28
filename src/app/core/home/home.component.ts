import { Component, signal } from '@angular/core';
import { SourceService } from '../../modules/source/source.service';
import { Source } from '../../modules/source/source.model';
import { Article } from '../../modules/article/article.model';
import { ArticleService } from '../../modules/article/article.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  sources = signal<Source[]>([]);
  articlesBySource = signal<Map<string, Article[]>>(new Map());
  window = signal<Map<string, boolean>>(new Map());
  language: string = "fr";

  constructor(public sourceService: SourceService, public articleService: ArticleService) { }

  ngOnInit() {
    if (typeof window !== 'undefined' && window.localStorage) {
      this.language = localStorage.getItem("language") ?? 'fr';  
    } 
    this.getSources();
  }

  getSources() {
    this.sourceService.getSources(this.language).subscribe((data) => {
      // 1. Regrouper les sources par pays
      const sourcesByCountry = new Map<string, any[]>();
  
      data.forEach(source => {
        const countryName = source.country_name || 'Autre';
        if (!sourcesByCountry.has(countryName)) {
          sourcesByCountry.set(countryName, []);
        }
        sourcesByCountry.get(countryName)?.push(source);
      });
  
      // 2. Pour chaque pays, trier les sources (gouvernementale d'abord)
      const sortedSources: any[] = [];
  
      sourcesByCountry.forEach((sources, country) => {
        const gov = sources.filter(s => s.is_gov);
        const others = sources.filter(s => !s.is_gov).sort((a, b) => a.name.localeCompare(b.name));
        sortedSources.push(...gov, ...others);
      });
  
      // 3. Set dans le store
      this.sources.set(sortedSources);
  
      // 4. Récupérer les articles
      sortedSources.forEach(source => this.getArticlesBySourceId(source.id));
    });
  }
  

  getArticlesBySourceId(sourceId: string) {
    this.articleService.getArticleBySourceId(sourceId, this.language).subscribe((data) => {
      const currentMap = this.articlesBySource();
      currentMap.set(sourceId, data);
      this.articlesBySource.set(currentMap);
    });
  }

  // Utils
  redirectTo(article: Article) {
    this.articleService.updateArticleVisits(article).subscribe((data) => {
      console.log(data);
    });
    window.open(article.content_url, '_blank');
  }
}