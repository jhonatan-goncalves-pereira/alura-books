
const elementoSectionLivrosContainer = document.getElementById("livros");



function exibirLivrosTela(listaDeLivros){
    elementoSectionLivrosContainer.innerHTML = "";
    listaDeLivros.forEach(livro  => {
        elementoSectionLivrosContainer.innerHTML += 
        `
        <div class="livro">
        <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo">
            ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.titulo}</p>
        <p class="livro__preco" id="preco">${livro.preco.toFixed(2)}</p>
        <div class="tags">
            <span class="tag">${livro.categoria}</span>
        </div>
        </div>

        `
    })
}
