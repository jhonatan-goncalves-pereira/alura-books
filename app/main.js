let livros = [];

const endPointAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json";

getBuscaLivrosAPI();

const elementoSectionLivrosContainer = document.getElementById("livros");

async function getBuscaLivrosAPI(){
    const res = await fetch(endPointAPI);
    livros = await res.json();
    console.log(livros);
    exibirLivrosTela(livros);
}

function exibirLivrosTela(listaDeLivros){
    listaDeLivros.forEach(livro  => {
        elementoSectionLivrosContainer.innerHTML += 
        `
        <div class="livro">
        <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo">
            ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.titulo}</p>
        <p class="livro__preco" id="preco">${livro.preco}</p>
        <div class="tags">
            <span class="tag">${livro.categoria}</span>
        </div>
        </div>

        `
    })
}
