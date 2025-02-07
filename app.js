//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomesSorteados = [];
function adicionarAmigo() {
    let nomes = document.querySelector('input').value.trim();
    if (nomes === '') {
        alert('Por favor, insira um nome.');
        return;
    }
    if (nomesSorteados.includes(nomes)) {
        alert(`O nome ${nomes} já consta na lista do sorteio`);
        limparCampo();
        return;
    }
    nomesSorteados.push(nomes);
    console.log(nomes);
    exibirNomesSorteados(nomes);
    limparCampo();
}

function exibirNomesSorteados(nomes) {
    const lista = document.getElementById('listaAmigos');
    const item = document.createElement('li');
    item.textContent = nomes;
    lista.appendChild(item);
}
function limparCampo() {
    let nomes = document.querySelector('input');
    nomes.value = '';
}

function sortearAmigo() {
    let tamanhoDaLista = nomesSorteados.length;
    if (tamanhoDaLista < 2) {
        alert('Adicione 2 ou mais nomes para poder realizar o jogo');
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() *  tamanhoDaLista);
    console.log(indiceAleatorio);
    const amigoSecretoEscolhido = nomesSorteados[indiceAleatorio];
    console.log(amigoSecretoEscolhido);
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').textContent = `O amigo escolhido é: ${amigoSecretoEscolhido}`;
    console.log(nomesSorteados);
}