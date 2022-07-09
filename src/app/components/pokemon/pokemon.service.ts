import { PokemonList } from './pokemonList';
import { Pokemon } from './pokemon';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon/';
  private POKEMON_LIST_URL =
    'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0';

  constructor(private http: HttpClient) {}

  getPokemonByName(pokemonName: string) {
    return this.http.get<Pokemon>(this.POKEMON_URL + pokemonName);
  }

  getPokemonByUrl(pokeUrl: string) {
    return this.http.get<Pokemon>(pokeUrl);
  }

  getList() {
    return this.http.get<PokemonList>(this.POKEMON_LIST_URL);
  }
}
