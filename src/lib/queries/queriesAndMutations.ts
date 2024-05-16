import {
    useQuery,
  } from "@tanstack/react-query";
  import {
    fetchRandomPokemon,
    fetchMoves
  } from "../../api/PokemonApi";
  import { QUERY_KEYS } from "./queryKeys";
import { useState, useEffect } from "react";
  

  export const useGetRandomPokemon = (id: number) => {
    return useQuery({
      queryFn: () => fetchRandomPokemon(id),
      queryKey: [QUERY_KEYS.GET_RANDOM_POKEMON, id],
      enabled: !!id,
    });
  };
  export const useGetRandomMoves = (move: any) => {
    return useQuery({
      queryFn: () => fetchMoves(move),
      queryKey: [QUERY_KEYS.GET_RANDOM_MOVES, move],
      enabled: !!move,
    });
  };
  export const useRandomMovesForPokemon = (pokemon: any) => {
    const [randomMoveName, setRandomMoveName] = useState<string | null>(null);
    const { data: moves } = useGetRandomMoves(randomMoveName ? [randomMoveName] : []);
  
    useEffect(() => {
      if (pokemon && pokemon.moves) {
        const randomMove = pokemon.moves[Math.floor(Math.random() * pokemon.moves.length)].move.name;
        setRandomMoveName(randomMove);
      }
    }, [pokemon]);
  
    return { data: moves };
  };