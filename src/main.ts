import {
    Controller
} from './controller/Controller.js'
import { 
    CatalogoPokemon 
} from './service/BoxService.js'

async function main(): Promise<void>{
    
    const catalogo = new CatalogoPokemon()
    const controller = new Controller(catalogo)

    await controller.buscarPokemon("pikachu")
    await controller.buscarPokemon("foo-foo")

    await controller.adicionarAoCatalogo("pikachu")
    await controller.adicionarAoCatalogo("charmander")

    controller.listarPokemons()

    await controller.adicionarAoCatalogo("mewtwo")
    await controller.adicionarAoCatalogo("charizard")

    controller.removerDoCatalogo(25)
    controller.removerDoCatalogo("foo-foo")
    controller.removerDoCatalogo(67)

    controller.listarPokemons()

    
}
main()