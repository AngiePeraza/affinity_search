import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TorreService {
  // private corsUrl = '';
  private corsUrl = 'https://cors-anywhere.herokuapp.com/';
  private urlTorreService: string = 'https://torre.co/api/';
  private urlTorreBioService: string = 'https://torre.bio/api/';
  private urlSearchService: string = 'https://search.torre.co/';
  private searchOptions: any = {};
  private aggregate = true;
  private offset = 0;
  private size = 10;

  constructor(private http: HttpClient) {}

  getBio(username) {
    return this.http.get(
      `${this.corsUrl}${this.urlTorreBioService}bios/${username}`
    );
  }

  getOpportunity(opportunityId: string) {
    return this.http.get(
      `${this.corsUrl}${this.urlTorreService}opportunities/${opportunityId}`
    );
  }

  searchOpportunitiesBySkill(skill: string, experience: string) {
    this.searchOptions = {
      and: [
        {
          skill: {
            term: skill,
            experience: experience
          }
        }
      ]
    };

    return this.http.post(
      `${this.corsUrl}${this
        .urlSearchService}opportunities/_search/?aggregate=${this
        .aggregate}&offset=${this.offset}&size=${this.size}`,
      this.searchOptions
    );
  }

  searchPeopleBySkill(skill: string, experience: string, languages: any) {
    this.searchOptions = {
      or: languages,
      and: [
        {
          skill: {
            term: skill,
            experience: experience
          }
        }
      ]
    };

    return this.http.post(
      `${this.corsUrl}${this.urlSearchService}people/_search/?aggregate=${this
        .aggregate}&offset=${this.offset}&size=${this.size}`,
      this.searchOptions
    );
  }
}
