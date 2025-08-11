const inputItem = document.getElementById('input-item');
const listaCompras = document.getElementById('lista-de-compras');
const botaoAdd = document.getElementById('adicionar-item');

let cont = 0;

botaoAdd.addEventListener('click', (evento) => {
    evento.preventDefault(); //impede que a página seja recarregada ao enviar o formulário.
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

    //definindo dia, data e hora;
    const diaSemana = new Date().toLocaleDateString('pt-BR' , {weekday: 'long'});
    const data = new Date().toLocaleDateString('pt-BR');

    const hora = new Date().toLocaleTimeString('pt-BR', {hour: 'numeric', minute: 'numeric'});

    const dataCompleta = `${diaSemana} (${data}) às ${hora}`;
    const itemData = document.createElement('p');
    itemData.innerText = dataCompleta;
    itemData.classList.add('texto-data');

    itemLista.appendChild(itemData);

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

