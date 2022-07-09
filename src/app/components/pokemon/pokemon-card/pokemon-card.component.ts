import { Component, Input, OnInit } from '@angular/core';

import { Pokemon } from './../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemonUrl = '';

  pokemonInfo: Pokemon | undefined;

  constructor(private pokemonsService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonsService
      .getPokemonByUrl(this.pokemonUrl)
      .subscribe((pokeInfo) => {
        pokeInfo = this.pokemonsService.formatPokemonId(pokeInfo)
        this.pokemonInfo = pokeInfo;
      });
  }
}
