import { Component, OnInit } from '@angular/core';
import { TorreService } from '../../services/torre.service';

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

  constructor( private torre: TorreService ) { }

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
    for( let skill of this.skills ) {
      this.torre.searchPeopleBySkill( skill, this.selectedExperience ).subscribe((data: any) => {
        console.log(data);
        let obj = {
          'skill': skill,
          'results': data.results
        };
        this.people.push(obj);
        this.search = true;
        console.log(this.people);
      });
    }
  }

}
