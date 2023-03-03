let botoes = document.querySelectorAll(".btn");

botoes.forEach(btn => {
    btn.addEventListener("click", filtrarLivrosFront);
})

function filtrarLivrosFront(){
    const elementoBtn = document.getElementById(this.id);
    elementoBtn.style.backgroundColor = "#242100";

    botoes.forEach(btn => {
        if(btn !== elementoBtn){
            btn.style.backgroundColor = "#898332";
        }
    });
    
    let listalivrosPesquisados = listaDeLivros.filter(livro => livro.categoria == elementoBtn.value);
    console.table(listalivrosPesquisados);
    criaHtmlElementoLivro(listalivrosPesquisados);
    fltroOn = false;
    bntFlitraPreco.style.backgroundColor = "#b6ad2b";

}