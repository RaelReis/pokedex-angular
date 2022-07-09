import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PokemonFormComponent } from './components/pokemon/pokemon-form/pokemon-form.component';
import { PokemonCardComponent } from './components/pokemon/pokemon-card/pokemon-card.component';
import { PokemonListComponent } from './components/pokemon/pokemon-list/pokemon-list.component';
import { AppRoutingModule } from './app-routing.module';
import { PokedexComponent } from './views/pokedex/pokedex.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PokemonFormComponent,
    PokemonCardComponent,
    PokemonListComponent,
    PokedexComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
