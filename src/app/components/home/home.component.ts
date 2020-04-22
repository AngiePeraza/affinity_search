import { Component, OnInit } from '@angular/core';
import { TorreService } from '../../services/torre.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  bio: any = {};
  selectedStrength: string = 'Click on one of your strengths';
  selectedLevel: string = '';

  constructor( private torre: TorreService ) {
    this.torre.getBio().subscribe((data: any) => {
      console.log(data);
      this.bio = data;
    });
  }

  setSkill( skill: any ) {
    this.selectedStrength = skill.textContent;
  }

  setLevel( level: string ) {
    this.selectedLevel = level;
  }

  searchBySkillLevel() {
    console.log('skill: ', this.selectedStrength);
    console.log('level: ', this.selectedLevel);
  }

}
