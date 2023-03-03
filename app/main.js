let listaDeLivros = [];
let copiaListaDeLivros = [];
let listaDeLivrosQueEstaSendoMostrada;
const urlApi = "https://guilhermeonrails.github.io/casadocodigo/livros.json";
getJsonApi();

async function getJsonApi() {
    const res = await fetch(urlApi);
    listaDeLivros = await res.json();
    criaHtmlElementoLivro(listaDeLivros);
    copiaListaDeLivros = listaDeLivros.slice();
}