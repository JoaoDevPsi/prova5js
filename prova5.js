const listaTarefas = document.getElementById('listaTarefas');
const novaTarefaInput = document.getElementById('novaTarefa');

function adicionarTarefa() {
    const novaTarefa = novaTarefaInput.value;
    if (novaTarefa !== '') {
        const li = document.createElement('li');
        li.textContent = novaTarefa;
        listaTarefas.appendChild(li);
        novaTarefaInput.value = '';
    }
}