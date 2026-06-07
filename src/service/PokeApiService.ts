import type { 
    PokemonResumo, 
    PokemonApiResponse 
} from '../model/Pokemon.js';

const url: string = 'https://pokeapi.co/api/v2/pokemon/'

export async function buscarPokemon(nomeOuId: string): Promise<PokemonResumo | null> { 
    try { 
        const resposta = await fetch(url+nomeOuId);
        if (!resposta.ok) { 
        console.log("[ERRO] Pokémon não encontrado."); 
        return null; 
        } 
        const dados: PokemonApiResponse = await resposta.json();
        const pokemonResumo = {
            "id": dados.id,
            "nome": dados.name,
            "tipos": dados.types.map(item => item.type.name),
            "altura": dados.height,
            "peso": dados.weight
        }
        return pokemonResumo
    } catch (erro) { 
        console.log("[ERRO] Não foi possível buscar o Pokémon."); 
        return null; 
    }
}
