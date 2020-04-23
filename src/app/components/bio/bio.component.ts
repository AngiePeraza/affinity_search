import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TorreService } from '../../services/torre.service';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent {

  bio: any = {};

  constructor( private router: ActivatedRoute, private torre: TorreService ) {

    this.router.params.subscribe( params => {
      this.getBio( params['username'] );
    });

  }

  getBio( username: string ) {
    this.torre.getBio( username ).subscribe( data => {
      this.bio = data;
    });
  }

}
