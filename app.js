//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomesSorteados = [];
function adicionarAmigo() {
    let nomes = document.querySelector('input').value;
    if (nomes == '') {
        alert('Por favor, insira um nome.');
    } else {
        nomesSorteados.includes(nomes);
        console.log(nomes);
        limparCampo();
    }
}

function limparCampo() {
    let nomes = document.querySelector('input');
    nomes.value = '';
}

function
