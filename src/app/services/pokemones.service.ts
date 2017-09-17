import { Injectable } from '@angular/core';

export interface PokemonRules{
  id: number;
  name: string;
  imagen: string;
  tipo: string;
  bio: string;
}

@Injectable()
export class PokemonesService {

  pokemones:PokemonRules[] = [
    {
      "id": 0,
      "name": "Bulbasaur",
      "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "tipo": "Planta",
      "bio": "asnhfugisagioasjfiajsifjsaiofsajfdsaf"
    },
    {
      "id": 1,
      "name": "Pikachu",
      "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      "tipo": "Planta",
      "bio": "asnhfugisagioasjfiajsifjsaiofsajfdsaf"
    },
    {
      "id": 2,
      "name": "Meowth",
      "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
      "tipo": "Planta",
      "bio": "asnhfugisagioasjfiajsifjsaiofsajfdsaf"
    },{
      "id": 3,
      "name": "Togepi",
      "imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/175.png",
      "tipo": "Planta",
      "bio": "asnhfugisagioasjfiajsifjsaiofsajfdsaf"
    }
  ]

  obtenerPokemones(){
    return this.pokemones;
  }
  obtenerPokemon(id:number){
    let pokemonSearch = {};
    for(let pokemon of this.pokemones){
      if(pokemon.id == id){
        pokemonSearch=pokemon;
      }
    }
    return pokemonSearch;
  }
  buscarPokemon(termino:string){
    let pokeArr = [];
    termino = termino.toLowerCase();
    for(let pokemon of this.pokemones){
      let nombre = pokemon.name.toLowerCase();
      if(nombre.indexOf(termino) >= 0){
        pokeArr.push(pokemon);
      }
    }
    return pokeArr;
  }

  constructor() { }

}
