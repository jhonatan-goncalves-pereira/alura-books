let btnFiltro = document.querySelectorAll(".btn");

btnFiltro.forEach(function(botao){botao.addEventListener("click", filtrarCategoriaLivros)});


function filtrarCategoriaLivros(){
     const elementoBtn = document.getElementById(this.id);
     const categoria = elementoBtn.value;

    const livrosFiltrados = livros.filter(livro => livro.categoria == categoria);    

    exibirLivrosTela(livrosFiltrados);
}
