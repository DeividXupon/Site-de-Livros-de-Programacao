function criaHtmlElementoLivro(lista, devoAlterarListaMostrada){
    const sectionLivros = document.getElementById("livros");
    sectionLivros.innerHTML = "";
    lista.forEach(elemento => {
    sectionLivros.innerHTML += `
        <div class="livro">
        <img class="livro__imagens" src="${elemento.imagem}"
            alt="${elemento.alt}" />
        <h2 class="livro__titulo">
            ${elemento.titulo}
        </h2>
        <p class="livro__descricao">${elemento.autor}</p>
        <p class="livro__preco" id="preco">R$${elemento.preco}</p>
        <p class="livro__precodesco" id="preco"><strong class="desconto">30% de DESCONTO</strong> R$${(elemento.preco - (elemento.preco * 0.3)).toFixed(2)}</p>
        <div class="tags">
            <span class="tag">${elemento.categoria}</span>
        </div>
        </div>
        `
    });

    if(devoAlterarListaMostrada == "nao"){

    }else{
        listaDeLivrosQueEstaSendoMostrada = lista.sort((a, b) => b.preco - a.preco).slice();
    }
}