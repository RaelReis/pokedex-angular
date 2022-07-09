import { Component, Input, OnInit } from '@angular/core';

import { Pokemon } from './../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.scss'],
})
export class PokemonFormComponent implements OnInit {
  searchText = '';

  pokemonInfo: Pokemon | undefined;

  constructor(private pokemonsService: PokemonService) {}

  ngOnInit(): void {}

  handleSubmit() {
    this.pokemonsService
      .getPokemonByName(this.searchText)
      .subscribe((pokemon) => {
        this.pokemonInfo = pokemon;
        this.searchText = '';
      });
  }
}
