//O principal objetivo deste desafio é criar um jogo do absoluto zero, com auxilio dos conteúdos estudados até o momento no curso de iniciante em programação.
let nomesSorteados = []; //Lista que recebera os nomes do sorteio
let nomesJaSorteados = []; //Lista que detera nomes ja sorteados
function adicionarAmigo() {
    // Função exclusiva para adicionar nomes do sorteio
    let nomes = document.querySelector('input').value.trim();
    if (nomes === '') {
        alert('Por favor, insira um nome.');
        return;
        // Verificar se foi digitado um nome.
    }
    if (nomesSorteados.includes(nomes)) {
        alert(`O nome ${nomes} já consta na lista do sorteio`);
        limparCampo();
        return;
        // Verificar se o nome ja consta no sorteio
    }
    nomesSorteados.push(nomes);
    console.log(nomes);
    exibirNomesSorteados(nomes);
    // // Incluir o nome na lista do sorteio
    limparCampo();
}

function exibirNomesSorteados(nomes) {
    // Exibe na tela nomes adicionados para o sorteio
    const lista = document.getElementById('listaAmigos');
    const item = document.createElement('li');
    item.textContent = nomes;
    document.getElementById('listaAmigos').innerHTML = '';
    lista.appendChild(item);
}
function limparCampo() {
    // Limpar o nome do campo para inserir outro
    let nomes = document.querySelector('input');
    nomes.value = '';
}

function sortearAmigo() {
    // Sortear o amigo secreto, verificando se há nomes suficiente para se jogar
    let tamanhoDaLista = nomesSorteados.length;
    if (tamanhoDaLista < 2) {
        alert('Adicione 2 ou mais nomes para poder realizar o jogo');
        return;
    }
     // Verificar se todos os nomes foram sorteados.
    if (nomesJaSorteados.length === nomesSorteados.length) {
        alert('Todos os nomes ja foram sorteados');
        nomesJaSorteados = [];
        document.getElementById('resultado').textContent = '';
        alert('Para reiniciar o jogo do zero, atualize a pagina, senão, pode adicionar mais nomes ou continuar com a lista original.');
        return;
    }
    // Verifica se o nome pode ser sorteado.
    let nomesNaoSorteados = nomesSorteados.filter(nomes => !nomesJaSorteados.includes(nomes));
    // Criar um indice para o nome ser sorteado
    const indiceAleatorio = Math.floor(Math.random() *  nomesNaoSorteados.length);
    // Selecionar amigo sorteado aleatóriamente
    const amigoSecretoEscolhido = nomesNaoSorteados[indiceAleatorio];
    // Agregar o nome a lista de sorteados
    nomesJaSorteados.push(amigoSecretoEscolhido);
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').textContent = `O amigo escolhido é: ${amigoSecretoEscolhido}`;
}