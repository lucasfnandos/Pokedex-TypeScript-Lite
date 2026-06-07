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

    removerDoCatalogo(idOunome: number | string): void {
        const pokemomIdOuNome = idOunome
        this.catalogo.remover(pokemomIdOuNome)
        return;
    }

    listarPokemons(): void {
        this.catalogo.listar()
        return;
    }

}

