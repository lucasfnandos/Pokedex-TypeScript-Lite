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
        console.log("Pokémon não encontrado.");
        return;
    }

    removerDoCatalogo(id: number): void {
        const pokemomId = id
        this.catalogo.remover(pokemomId)
        return;
    }

    listarPokemons(): void {
        this.catalogo.listar()
        return;
    }

}

