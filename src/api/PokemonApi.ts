import axios, { AxiosResponse } from 'axios';
import { Move, Pokemon } from '../interfaces/Pokemon';
import { API_BASE_URL } from '../config';


// Function to fetch random Pokemon data from the API

export const fetchRandomPokemon = async (id: number): Promise<Pokemon> => {
    try {
        const url: string = `${API_BASE_URL}/pokemon/${id}`;
        const response: AxiosResponse<any> = await axios.get(url);
        const pokemon = response.data;
        
        const data: Pokemon = {
            name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
            base_stats: pokemon.stats[0].base_stat,
            front_sprite: pokemon.sprites.front_default,
            back_sprite: pokemon.sprites.back_default,
            primary_type: pokemon.types[0].type.name,
            moves: pokemon.moves
        };
        
        return data;
    } catch (error) {
        // Handle error
        console.error("Error fetching random Pokemon:", error);
        throw error;
    }
};
// Function to fetch move data from the API

export const fetchMoves = async (move: string): Promise<Move> => {
    try {
        const url: string = `${API_BASE_URL}/move/${move}`;
        const response: AxiosResponse<any> = await axios.get(url);
        const moveData = response.data;
        
        const data: Move = {
            name: moveData.name,
            power: moveData.power,
            priority: moveData.priority,
        };
        
        return data;
    } catch (error) {
        // Handle error
        console.error("Error fetching move:", error);
        throw error;
    }
};
