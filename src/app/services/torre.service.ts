import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TorreService {
  private corsUrl = 'https://cors-anywhere.herokuapp.com/';
  private urlTorreService: string = 'https://torre.bio/api/';
  private urlSearchService: string = 'https://search.torre.co/';
  private username: string = 'lorep19';
  private searchOptions: any = {};
  private aggregate = true;
  private offset = 0;
  private size = 10;

  constructor(private http: HttpClient) {}

  getBio() {
    return this.http.get(
      `${this.corsUrl}${this.urlTorreService}bios/${this.username}`
    );
  }

  searchOpportunitiesBySkill( skill: string, experience: string ) {
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
      `${this.corsUrl}${this.urlSearchService}opportunities/_search/?aggregate=${this.aggregate}&offset=${this.offset}&size=${this.size}`,
      this.searchOptions
    );
  }

  searchPeopleBySkill( skill: string, experience: string ) {
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
      `${this.corsUrl}${this.urlSearchService}people/_search/?aggregate=${this.aggregate}&offset=${this.offset}&size=${this.size}`,
      this.searchOptions
    );
  }
}
