import {
    Controller
} from './controller/Controller.js'
import { 
    CatalogoPokemon 
} from './service/BoxService.js'

function main(): void{
    
    const catalogo = new CatalogoPokemon()
    const controller = new Controller(catalogo)

    controller.adicionarAoCatalogo("pikachu")
    controller.adicionarAoCatalogo("pikachu")

}
main()