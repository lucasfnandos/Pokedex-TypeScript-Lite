 import type {  PokemonResumo } from "../model/Pokemon.js";
 
 export class CatalogoPokemon { 
    private pokemons: PokemonResumo[] = []; 
    
    adicionar(pokemon: PokemonResumo): void { 
        const jaExiste = this.pokemons.some((item) => item.id ===  pokemon.id); 
        if (jaExiste) {
            console.log(`[AVISO] ${pokemon.nome} já está no catálogo.`); 
            return; 
        } 
        this.pokemons.push(pokemon);
        console.log(`[OK] ${pokemon.nome} adicionado ao catálogo.`); 
    } 
    
    listar(): void { 
        if (this.pokemons.length === 0) {
            console.log("[AVISO] Catálogo vazio."); 
            return; 
        } 
        this.pokemons.forEach((pokemon) => {
        console.log(`#${pokemon.id} - ${pokemon.nome} | Tipos: ${pokemon.tipos.join(",")} | Altura: ${pokemon.altura} | Peso: ${pokemon.peso}`); 
        }); 
    } 
    
    remover(idOuNome: number | string): void { 
        if(typeof idOuNome === "string" ) {
            const existe = this.pokemons.some((pokemon) => pokemon.nome === idOuNome)
            if(!existe) {
                console.log("[AVISO] Nenhum Pokémon encontrado com esse Nome."); 
                return;
            }
            this.pokemons = this.pokemons.filter((pokemon) => pokemon.nome !== idOuNome)
            console.log("[OK] Pokémon removido do catálogo.");
            
        } else {
            const existe = this.pokemons.some((pokemon) => pokemon.id === idOuNome); 
            if (!existe) {
            console.log("[AVISO] Nenhum Pokémon encontrado com esse ID."); 
            return;  
            } 
            this.pokemons = this.pokemons.filter((pokemon) => pokemon.id !== idOuNome);
            console.log("[OK] Pokémon removido do catálogo.");
        }
    } 
}
