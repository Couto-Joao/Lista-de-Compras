import { criarItemDaLista } from "./scripts/lista.js";
import verificarListaVazia from "./scripts/verificarListaVazia.js";


const listaCompras = document.getElementById('lista-de-compras');
const botaoAdd = document.getElementById('adicionar-item');

botaoAdd.addEventListener('click', (evento) => {
    evento.preventDefault();
    const itemLista = criarItemDaLista();
    listaCompras.appendChild(itemLista);
    verificarListaVazia(listaCompras);
})

verificarListaVazia(listaCompras);

