## AluraBooks

Este projeto é uma aplicação web simples para exibir uma coleção de livros, permitindo filtrá-los por categoria, verificar a disponibilidade, e ordenar por preço. A aplicação carrega os dados dos livros a partir de uma API externa, aplica descontos e exibe as informações de maneira organizada.

### Estrutura do Projeto

- Pasta `app/`:
  - `main.js`: Funções principais para buscar livros da API e exibi-los.
  - `metodoForEach.js`: Funções relacionadas a iteração de arrays.
  - `metodoMap.js`: Funções relacionadas a mapeamento de arrays.
  - `metodoFilter.js`: Funções relacionadas a filtragem de arrays.
  - `metodoSort.js`: Funções relacionadas a ordenação de arrays.
  - `metodoReduce.js`: Funções relacionadas a redução de arrays.
- Pasta `imagens`:
  - `imagens.....`
- `index.html`: Arquivo HTML principal que estrutura a página web.
- `style.css`: Arquivo CSS para estilizar a página.
- `requisicao.txt`: Arquivo de texto com a API externa.


### Como Utilizar

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/jhonatan-goncalves-pereira/alura-books.git
   ```

2. **Acesse a Pasta do Projeto**

   ```bash
   cd alura-books
   ```

3. **Abra o arquivo `index.html` no seu navegador**

### Funcionalidades

- **Carregar Livros**: A aplicação carrega a lista de livros a partir de uma API externa.
- **Filtrar Livros**: É possível filtrar os livros por categorias (Front-end, Back-end, Dados) ou por disponibilidade.
- **Ordenar Livros por Preço**: Ordena os livros por preço, do menor para o maior.
- **Aplicar Desconto**: Aplica um desconto de 30% a todos os livros ao carregar os dados.

### Estrutura HTML

O arquivo `index.html` contém a estrutura básica da página, incluindo o cabeçalho, navegação, seção de livros e rodapé.

### Estrutura CSS

O arquivo `style.css` é responsável pela estilização da página, garantindo que os elementos sejam exibidos de forma organizada e atraente.

### Estrutura JavaScript

Os arquivos JavaScript dentro da pasta `app/` contêm as funções que manipulam os dados dos livros, aplicam filtros, ordenações e exibem as informações na tela.

#### Funções JavaScript Principais

- **getBuscaLivrosAPI** `app/main.js`: Função assíncrona que busca os dados dos livros da API.
- **filtrarLivros** `app/metodoFilter.js`: Função que filtra os livros com base na categoria selecionada.
- **exibirOsLivrosNaTela** `app/metodoForeach.js`: Função que exibe a lista de livros na tela.
- **aplicarDesconto**: `app/metodoMap.js` Função que aplica um desconto aos preços dos livros.
- **calcularValorTotalDeLivrosDisponiveis** `app/metodoReduce.js`: Função que calcula o valor total dos livros disponíveis.
- **ordenarLivrosPorPreco** `app/metodoSort.js`: Função que ordena os livros pelo preço.

### Exemplos de Uso

Para filtrar livros de Front-end, clique no botão "LIVROS DE FRONT-END". Para ver todos os livros disponíveis, clique no botão "LIVROS DISPONÍVEIS". Para ordenar os livros por preço, clique no botão "ORDENAR POR PREÇO".

### Contribuição

Se você quiser contribuir com este projeto, sinta-se à vontade para enviar pull requests ou abrir issues no repositório GitHub.
