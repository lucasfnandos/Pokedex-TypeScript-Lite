# Pokédex TypeScript Lite 
## Sobre o projeto 
O Pokédex TypeScript Lite é uma aplicação simples em Node.js com TypeScript 
que consulta dados de Pokémon na PokeAPI e organiza alguns resultados em um 
catálogo local durante a execução do programa. 
## Objetivo 
Praticar os principais conceitos do Módulo 01: - Node.js; - JavaScript no back-end; - TypeScript; - interfaces; - funções tipadas; - arrays; - objetos; - JSON; - métodos de array; - classes; - async/await; - fetch; - tratamento de erros; - GitHub; - GitFlow; - Kanban. 
## Tecnologias utilizadas 
- Node.js 
- TypeScript 
- TSX 
- PokeAPI 
- Git 
- GitHub

## Pré-requisitos 
Antes de executar o projeto, é necessário ter instalado: - Node.js - npm - Git 
## Como instalar 
Clone o repositório: 
```bash 
git clone LINK_DO_REPOSITORIO 
Acesse a pasta do projeto: 
cd pokedex-typescript-lite 
Instale as dependências: 
npm install 
Como executar 
Execute o projeto em ambiente de desenvolvimento: 
npm run dev 
Estrutura do projeto 
pokedex-typescript-lite/ 

│ 
├── src/ 
│   ├── main.ts 
│   ├── model/
│   │    └── Pokemon.ts
│   ├── controller/
│   │    └── Controller.ts
│   ├── service/
│   │    ├──PokeApiService.ts
│   │    └──BoxService.ts
│   └── images/
├── package.json 
├── tsconfig.json 
└── README.md 
```
Funcionalidades 
- Buscar Pokémon por nome ou ID 
- Tratar erro de Pokémon inexistente
 Transformar resposta da API em objeto simplificado 
 - Adicionar Pokémon ao catálogo local 
 - Impedir Pokémon duplicado 
 - Listar catálogo 
 - Remover Pokémon por ID 
 - Exibir mensagens no terminal 
 - Exemplos de execução 
 - Busca válida

### Entrada testada: pikachu 
- Saída obtida: [OK] Pokémon encontrado: pikachu 
- #25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60

![teste: buscar pokemom pikachu na API](src/images/OK-buscar-pikachu.png) 

### Busca inválida: pikachu-foo-foo 
- Saída obtida: [ERRO] Pokémon não encontrado.

![teste: buscar pokemon inexistente na API](src/images/NOK-buscar-pikachu-foo-foo.png)

### Duplicidade: adicionar pikachu duas vezes 
- Saída obtida: [AVISO] pikachu já está no catálogo.

![teste: adicionar ao catalogo local pokemom pikachu duas vezes](src/images/AVISO-duplicidade-adicionar-catalogo.png)

### Adicionar pokemon ao catalogo local:
 - Saida obtida: [OK] Pokemon adicionado ao catalogo

![teste: adicionar pokemon ao catalogo local](src/images/OK-adicionar-catalogo.png)

### Remoção 
 - Entrada testada: remover ID 25 e Nome "charmander" 
 - Saída obtida: [OK] Pokémon removido do catálogo.

![teste: remover do catalogo local pokemons usando id e também usando nome](src/images/OK-remover-catalogo.png)

### Remoção de Pokemon inexistente:
- Entrada testada: id inválido e nome inválido

![teste: remover do catalogo local pokemons com id e nome inexistentes](src/images/AVISO-remover-pokemon-inexistente-catalogo.png)

### Listar Catálogo Local:
- Entrada: listar pokemons antes e depois de remover
- Saída esperada: #ID | Nome: | Tipos: | Altura: | Peso: (pokemons do catálogo)

![teste: listar o catálogo após adicionar pokemons e após remover pokemons](src/images/OK-listar-catalogo.png)

### Conceitos aplicados 
#### TypeScript: 
O projeto foi desenvolvido utilizando tipagem estática para aumentar a segurança do código e facilitar a manutenção.

Foram utilizados:
- Tipos primitivos como string e number em variáveis, parâmetros e retornos de funções.
- Union Types, como number | string, permitindo que métodos aceitem tanto o ID quanto o nome de um Pokémon.
- Arrays tipados, como string[] e PokemonResumo[].
- Retornos tipados em funções assíncronas, por exemplo Promise<PokemonResumo | null>.
##### Interface PokemonResumo 
A interface PokemonResumo foi criada para representar apenas os dados relevantes de um Pokémon retornados pela API.
```
interface PokemonResumo {
    id: number;
    nome: string;
    tipos: string[];
    altura: number;
    peso: number;
}
```
Seu objetivo é padronizar as informações utilizadas pela aplicação, evitando depender diretamente da estrutura completa da PokeAPI.

Também foi criada a interface PokemonApiResponse, utilizada para tipar a resposta original da API e permitir a extração segura dos dados necessários. 
#### Fetch e async/await 
A consulta à PokeAPI é realizada pela função buscarPokemon() presente no arquivo PokeApiService.ts.

O método utiliza fetch() para realizar uma requisição HTTP para o endpoint:

https://pokeapi.co/api/v2/pokemon/

A operação é assíncrona e utiliza async/await para aguardar a resposta da API antes de continuar a execução.

Exemplo:
```
const resposta = await fetch(url + nomeOuId);
const dados = await resposta.json();
```
Após receber os dados, a aplicação cria um objeto simplificado do tipo PokemonResumo, contendo apenas as informações necessárias para o projeto.

#### Tratamento de erros
O projeto trata dois cenários principais de erro:

##### Pokémon inexistente

Quando a API retorna uma resposta inválida (resposta.ok === false), a aplicação informa que o Pokémon não foi encontrado e retorna null.
```
if (!resposta.ok) {
    console.log("[ERRO] Pokémon não encontrado.");
    return null;
}
```
##### Falhas na requisição

A busca é protegida por um bloco try/catch. Caso ocorra algum problema de conexão ou erro inesperado, a aplicação captura a exceção e exibe uma mensagem amigável ao usuário.
```
catch (erro) {
    console.log("[ERRO] Não foi possível buscar o Pokémon.");
    return null;
}
```
#### Métodos de array 
Diversos métodos de array foram utilizados para manipular os dados do catálogo.

- map()

Utilizado para transformar a lista de tipos retornada pela API em um array contendo apenas os nomes dos tipos.
```
dados.types.map(item => item.type.name)
```
- some()

Utilizado para verificar se um Pokémon já existe no catálogo antes da inserção e também para validar se existe um Pokémon com determinado ID ou nome antes da remoção.
```
this.pokemons.some(item => item.id === pokemon.id)
```
- filter()

Utilizado para remover Pokémon do catálogo através da criação de um novo array sem o elemento informado.
```
this.pokemons.filter(
    pokemon => pokemon.id !== idOuNome
)
```
- forEach()

Utilizado para percorrer todos os Pokémon cadastrados e exibir suas informações no terminal.
```
this.pokemons.forEach((pokemon) => {
    console.log(...)
})
```
#### Classe CatalogoPokemon 
A classe CatalogoPokemon é responsável por armazenar e gerenciar os Pokémon adicionados pelo usuário.

Atributo
private pokemons: PokemonResumo[] = [];

Armazena todos os Pokémon cadastrados no catálogo.

##### Métodos

- adicionar(pokemon)

Adiciona um novo Pokémon ao catálogo após verificar se ele já existe.

- listar()

Percorre todos os Pokémon cadastrados e exibe suas informações no terminal.

- remover(idOuNome)

Remove um Pokémon do catálogo utilizando seu ID ou nome como critério de busca.

A classe concentra toda a lógica de manipulação dos dados, seguindo o princípio de responsabilidade única e mantendo a organização do projeto.
#### Classe Controller
A classe Controller atua como intermediária entre a aplicação principal (main.ts), os serviços de consulta à API e o catálogo de Pokémon.

Seu objetivo é centralizar o fluxo da aplicação, coordenando as operações de busca, cadastro, remoção e listagem de Pokémon sem que o arquivo principal precise conhecer os detalhes de implementação.

- Atributo
private catalogo: CatalogoPokemon

Recebe uma instância de CatalogoPokemon por meio do construtor, permitindo que o controlador manipule o catálogo sem criar dependências diretas dentro da própria classe.

##### Métodos

- adicionarAoCatalogo(nomeOuId)

Realiza uma busca na PokeAPI utilizando o serviço buscarPokemon(). Caso o Pokémon seja encontrado, ele é adicionado ao catálogo.

- removerDoCatalogo(idOuNome)

Encaminha para o catálogo a solicitação de remoção de um Pokémon utilizando seu ID ou nome.

- listarPokemons()

Solicita ao catálogo a exibição de todos os Pokémon cadastrados.

- buscarPokemon(nome)

Realiza uma consulta individual na PokeAPI e exibe no terminal as informações do Pokémon encontrado.

##### Responsabilidade na arquitetura

A utilização da classe Controller permite separar as responsabilidades da aplicação:

- main.ts apenas executa o fluxo principal da aplicação.
- Controller coordena as operações e regras de execução.
- PokeApiService é responsável pela comunicação com a API.
- CatalogoPokemon gerencia os dados armazenados localmente.

Essa separação torna o código mais organizado, reutilizável e fácil de manter, seguindo princípios de responsabilidade única e modularização. 
#### Organização do Kanban 
Link do Kanban: COLE_AQUI_O_LINK 

### Branches utilizadas
 - main 
 - develop 
 - docs

### Melhorias futuras 
- Criar menu interativo no terminal 
- Salvar catálogo em arquivo JSON 
- Exibir HP, ataque e defesa 
- Criar filtros por tipo de Pokémon 
- Criar uma API própria com Express 