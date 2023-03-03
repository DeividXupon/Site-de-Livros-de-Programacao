const bntFlitraPreco = document.getElementById("btnOrdenarPorPreco");
bntFlitraPreco.addEventListener("click", filtro);

let fltroOn = false;

function filtro() {
    if(fltroOn == false){
        let listaFlitrada = listaDeLivrosQueEstaSendoMostrada.slice()
        criaHtmlElementoLivro(listaFlitrada.sort((a, b) => a.preco - b.preco), "nao");
        fltroOn = true
        bntFlitraPreco.style.backgroundColor = "#574f00";
    }else{
        criaHtmlElementoLivro(listaDeLivrosQueEstaSendoMostrada);
        fltroOn = false
        bntFlitraPreco.style.backgroundColor = "#b6ad2b";
    }
}

const bntVoltar = document.getElementById("btnLivrosDisponiveis");

bntVoltar.addEventListener("click", () => { criaHtmlElementoLivro(copiaListaDeLivros) });