import { Component, OnInit } from '@angular/core';
import { TorreService } from '../../services/torre.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  bio: any = {};

  constructor( private torre: TorreService ) {
    this.torre.getBio().subscribe((data: any) => {
      console.log(data);
      this.bio = data;
    });
  }

}
