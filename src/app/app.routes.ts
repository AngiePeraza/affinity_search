import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { OpportunityComponent } from './components/opportunity/opportunity.component';
import { BioComponent } from './components/bio/bio.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'opportunity/:id', component: OpportunityComponent },
    { path: 'bio/:username', component: BioComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
]