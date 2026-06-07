 import type {  PokemonResumo } from "../model/Pokemon.js";
 
 export class CatalogoPokemon { 
    private pokemons: PokemonResumo[] = []; 
    
    adicionar(pokemon: PokemonResumo): void { 
        const jaExiste = this.pokemons.some((item) => item.id ===  pokemon.id); 
        if (jaExiste) {
            //avisoPokemonJaCadastrado 
            console.log(`[AVISO] ${pokemon.nome} já está no catálogo.`); 
            return; 
        } 
        this.pokemons.push(pokemon);
        //successPokemonAdicionado 
        console.log(`[OK] ${pokemon.nome} adicionado ao catálogo.`); 
    } 
    
    listar(): void { 
        if (this.pokemons.length === 0) {
            //avisoCatalogoVazio
            console.log("[AVISO] Catálogo vazio."); 
            return; 
        } 
        this.pokemons.forEach((pokemon) => {
            //dadosPokemonFormatado 
        console.log(`#${pokemon.id} - ${pokemon.nome} | Tipos: ${pokemon.tipos.join(",")}`); 
        }); 
    } 
    
    remover(id: number): void { 
        const existe = this.pokemons.some((pokemon) => pokemon.id === id); 
        if (!existe) {
            //avisoPokemonNaoEncontrado 
        console.log("[AVISO] Nenhum Pokémon encontrado com esse ID."); 
        return;  
        } 
        this.pokemons = this.pokemons.filter((pokemon) => pokemon.id !== id);
        //successPokemonRemovido 
        console.log("[OK] Pokémon removido do catálogo."); 
    } 
}
