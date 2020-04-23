import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TorreService } from '../../services/torre.service';

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.css']
})
export class OpportunityComponent {

  constructor( private router: ActivatedRoute, private torre: TorreService ) {

    this.router.params.subscribe( params => {
      this.getOpportunity( params['id'] );
    });
    
  }

  getOpportunity( id: string ) {
    console.log(id);
    this.torre.getOpportunity( id ).subscribe( data => {
      console.log(data);
    });
  }

}
