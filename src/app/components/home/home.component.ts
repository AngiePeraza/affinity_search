import { Component, OnInit } from '@angular/core';
import { TorreService } from '../../services/torre.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  bio: any = {};
  selectedSkill: string = 'Click on one of your strengths';
  selectedExperience: string = '';
  opportunities: any[] = [];

  constructor( private torre: TorreService ) {
    this.torre.getBio().subscribe((data: any) => {
      this.bio = data;
    });
  }

  setSkill( skill: any ) {
    this.selectedSkill = skill.textContent.trim();
  }

  setLevel( experience: string ) {
    this.selectedExperience = experience;
  }

  searchBySkillLevel() {
    this.opportunities = [];
    this.torre.searchOpportunitiesBySkill( this.selectedSkill, this.selectedExperience ).subscribe((data: any) => {
      console.log(data);
      this.opportunities = data.results;
    });
  }

}
