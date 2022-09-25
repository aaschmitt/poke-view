import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function PokemonCard({pokemon}) {
    const [pokemonName, setPokemonName] = useState(pokemon);
    const [pokemonImage, setPokemonImage] = useState("");
    const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    const [bg, setBg] = useState();

    function selectBgColor(type) {
        switch(type){
            case "electric":
                return 'Khaki'
            case "fire":
                return 'LightCoral'
            case "grass":
                return 'LightGreen'
            case "water":
                return 'LightSkyBlue'
            case "bug":
                return 'Plum'
            case "flying":
                return 'LightCyan'
            case "normal":
                return 'MintCream'
            default:
                return 'Navy'
        }
    }

    useEffect(() => {
        axios.get(url).then(res => {
        setPokemonName(res.data.name);
        setPokemonImage(res.data.sprites.front_default);
        setBg(selectBgColor(res.data.types[0].type.name));
        })
    }, []);

    return (
        <>
        <div className="card border-dark" style={{
            backgroundColor: bg,
            width: "15rem"
        }}>
            <h5 className="card-title text-center">{pokemonName}</h5>
            <div className="card-body">
                <img className="card-img-top" src={pokemonImage}/>
            </div>
        </div>
        </>
    )
}
