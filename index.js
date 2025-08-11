import { criarItemDaLista } from "./scripts/lista.js";
const listaCompras = document.getElementById('lista-de-compras');
const botaoAdd = document.getElementById('adicionar-item');

botaoAdd.addEventListener('click', (evento) => {
    evento.preventDefault();
    const itemLista = criarItemDaLista();
    listaCompras.appendChild(itemLista);
    verificarListaVazia();
})

const mensagemListaVazia = document.querySelector('.mensagem-lista-vazia');

function verificarListaVazia() {
    const itensDaLista = listaCompras.querySelectorAll('li');

    if(itensDaLista.length === 0) {
        mensagemListaVazia.style.display = 'block';
    } else {
        mensagemListaVazia.style.display = 'none';
    }
}

verificarListaVazia();

