import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TorreService {

  private urlTorreService: string = 'https://cors-anywhere.herokuapp.com/https://torre.bio/api/';
  private username: string = 'lorep19';

  constructor( private http: HttpClient ) {}

  getBio() {
    return this.http.get(`${ this.urlTorreService }bios/${ this.username }`);
  }
}
