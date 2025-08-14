import gerarDiaSemana from "./gerarDiaSemana.js";

const inputItem = document.getElementById('input-item');
let cont = 0;

export function criarItemDaLista() {
    if(inputItem.value == '') {
        alert('Por favor, insira um item.');
        return;
    }

    const itemLista = document.createElement('li');
    const containerItemLista = document.createElement('div');
    containerItemLista.classList.add('lista-item-container');
    const inputCheckbox = document.createElement('input');
    inputCheckbox.type = 'checkbox';
    inputCheckbox.id = 'checkbox-' + cont++;
    const nomeItem = document.createElement('p');
    nomeItem.innerText = inputItem.value;

    inputCheckbox.addEventListener('click', function(){
        if(inputCheckbox.checked) {
            nomeItem.style.textDecoration = 'line-through';
        } else {
            nomeItem.style.textDecoration = 'none';
        }
    })

    containerItemLista.appendChild(inputCheckbox);
    containerItemLista.appendChild(nomeItem);

    itemLista.appendChild(containerItemLista);

    const dataCompleta = gerarDiaSemana();

    const itemData = document.createElement('p');
    itemData.innerText = dataCompleta;
    itemData.classList.add('texto-data');

    itemLista.appendChild(itemData);

    return itemLista;
}