import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { MedewerkerformComponent } from './medewerkerform/medewerkerform.component';
import { FormsModule } from '@angular/forms';
import { MedewerkerComponent } from './medewerker/medewerker.component';
import { HttpClientModule } from '@angular/common/http';
import { KlantenComponent } from './klanten/klanten.component';
import { BestellingenComponent } from './bestellingen/bestellingen.component';
import { KlantdetailsComponent } from './klantdetails/klantdetails.component';
import { KlantregistratieComponent } from './klantregistratie/klantregistratie.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    MedewerkerformComponent,
    MedewerkerComponent,
    KlantenComponent,
    BestellingenComponent,
    KlantdetailsComponent,
    KlantregistratieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
