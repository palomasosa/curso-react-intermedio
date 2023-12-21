import { useEffect, useState } from "react";

export function usePokemon(id) {
    const [pokemon,setPokemon] = useState(null);
    const abortController = new AbortController();
    const signal = abortController.signal;

    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {signal})
        .then((resp)=>resp.json())
        .then((data)=> setPokemon(data))
        return()=>abortController.abort();
    },[id])
    return { pokemon };
}