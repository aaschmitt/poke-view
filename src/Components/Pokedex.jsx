import React, {useEffect, useState} from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';

export default function Pokedex() {

  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon");

  useEffect(() => {
    axios.get(currentPageUrl).then(res => {

      // TODO set next / prev pages

      setPokemon(res.data.results.map(p => p.name))

    })
  }, [])

  // We want to return PokemonCards for each Pokemon that is found on the first "page" by hitting the URL "https://pokeapi.co/api/v2/pokemon"
  return (
    <div className="row row-cols-1 row-cols-md-2">
      {pokemon.map(p => (
        <PokemonCard key={p} pokemon={p}/>
      ))}
    </div>
  )
}
