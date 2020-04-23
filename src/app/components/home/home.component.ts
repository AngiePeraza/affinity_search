import { Component, OnInit } from '@angular/core';
import { TorreService } from '../../services/torre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  bio: any = {};
  username: string = 'lorep19';
  selectedSkill: string = 'Click on one of your strengths';
  selectedExperience: string = '';
  opportunities: any[] = [];

  constructor( private torre: TorreService, private router: Router ) {
    this.torre.getBio( this.username ).subscribe((data: any) => {
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
      this.opportunities = data.results;
    });
  }

  seeOportunity( opportunityId ) {
    this.router.navigate([ '/opportunity', opportunityId ]);
  }

}
