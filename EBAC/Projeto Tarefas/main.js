const form = document.getElementById('form-lista');
const tarefa = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaTarefa();
    atualizaLista();
});

function adicionaTarefa() {
    const inputTarefa = document.getElementById('nome-tarefa');

    tarefa.push(inputTarefa.value); 

    let linha = ''; 
    linha += `<li>${inputTarefa.value}</li>`;

    linhas += linha;
    
    inputTarefa.value = '';
}

function atualizaLista() {
    const listaTarefas = document.querySelector('ul');
    listaTarefas.innerHTML = linhas;

    listaTarefas.addEventListener('click', function(e) {
        if(e.target.classList.contains('realizada')) {
            e.target.classList.remove('realizada');
        } else {
            e.target.classList.add('realizada');
        }
    }) 
}
