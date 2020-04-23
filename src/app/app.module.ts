import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { BioComponent } from './components/bio/bio.component';
import { OpportunityComponent } from './components/opportunity/opportunity.component';
import { HomeComponent } from './components/home/home.component';

// Import Routes
import { ROUTES } from './app.routes';
import { NoimagePipe } from './pipes/noimage.pipe';
import { HasValuePipe } from './pipes/has-value.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    BioComponent,
    OpportunityComponent,
    HomeComponent,
    NoimagePipe,
    HasValuePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
