import { PokemonList } from './../pokemonList';
import { Pokemon } from './../pokemon';
import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  @Input() pokemonInfo: Pokemon | undefined;
  pokemonList: PokemonList | undefined;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getList().subscribe((list) => {
      this.pokemonList = list;
    });
  }
}
