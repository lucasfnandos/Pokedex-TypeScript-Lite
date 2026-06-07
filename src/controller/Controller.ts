import { CatalogoPokemon } from "../service/BoxService.js";
import { buscarPokemon } from "../service/PokeApiService.js";

export class Controller {
    constructor(private catalogo: CatalogoPokemon) {}

    async adicionarAoCatalogo(nomeOuId: string): Promise<void>{
        const pokemon = await buscarPokemon(nomeOuId)
        if(pokemon !== null) {
            this.catalogo.adicionar(pokemon)
            return;
        }
        return;
    }

    removerDoCatalogo(idOunome: number | string): void {
        const pokemomIdOuNome = idOunome
        this.catalogo.remover(pokemomIdOuNome)
        return;
    }

    listarPokemons(): void {
        this.catalogo.listar()
        return;
    }

    async buscarPokemon(nome: string): Promise<void> {
        const pokemon = await buscarPokemon(nome)
        if(pokemon !== null){
            console.log(`[OK] Pokemon encontrado: ${pokemon.nome}`)
            console.log(`#${pokemon.id} - ${pokemon.nome} | Tipos: ${pokemon.tipos.join(",")} | Altura: ${pokemon.altura} | Peso: ${pokemon.peso}`);
        }
        return;
    }

}

