import { Component, OnInit } from '@angular/core';
import { TorreService } from '../../services/torre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  selectedExperience: string = '';
  roles: any[] = [];
  skills: any[] = [];
  people: any[] = [];
  search = false;
  bio: any = {};
  username: string = 'lorep19';

  constructor( private torre: TorreService, private router: Router ) {
    this.torre.getBio( this.username ).subscribe((data: any) => {
      this.bio = data;
    });
  }

  setRoles( $event ) {
    this.search = false;
    let roleText: string = $event.target.options[$event.target.options.selectedIndex].text;
    let roleSkill: string = $event.target.value;
    this.roles.push(roleText);
    this.skills.push(roleSkill);
  }

  setLevel( experience: string ) {
    this.selectedExperience = experience;
  }

  searchPeopleBySkills() {
    this.people = [];
    let languages = [];
    for( let lang of this.bio.languages ) {
      let obj = { language: { term: lang.language, fluency: lang.fluency } };
      languages.push(obj);
    }
  
    for( let skill of this.skills ) {
      this.torre.searchPeopleBySkill( skill, this.selectedExperience, languages ).subscribe((data: any) => {
        let obj = {
          'skill': skill,
          'results': data.results
        };
        this.people.push(obj);
        this.search = true;
      });
    }
  }

  seeBio( username ) {
    this.router.navigate([ '/bio', username ]);
  }

}
