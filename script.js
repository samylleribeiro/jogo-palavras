// AS palavras do jogo são definidas em um array de objetos, cada objeto contém a palavra, o emoji correspondente, as sílabas e as opções de sílabas para formar a palavra.
let palavrasDoJogo = [
    { palavra: "BOLO", emoji: "🎂", silabas: ["BO", "LO"], opcoes: ["GA", "LO", "CA", "MA", "PA","BO"] },
    { palavra: "BOLA", emoji: "⚽", silabas: ["BO", "LA"], opcoes: ["BA", "LA", "TA", "RE", "BO","MA"] },
    { palavra: "GATO", emoji: "🐱", silabas: ["GA", "TO"], opcoes: ["GO", "TO", "GA", "LI", "PA","TO"] },
    { palavra: "CASA", emoji: "🏠", silabas: ["CA", "SA"], opcoes: ["PA", "SA", "MA", "CA", "DA","FA"] },
    { palavra: "DADO", emoji: "🎲", silabas: ["DA", "DO"], opcoes: ["FA", "DO", "MA", "PA", "DA","FA"] },
    { palavra: "CARRO", emoji: "🚗", silabas: ["CA", "RRO"], opcoes: ["PA", "RRO", "MA", "CA", "FA","FA"] },
    { palavra: "BANANA", emoji: "🍌", silabas: ["BA", "NA", "NA"], opcoes: ["BA", "MA", "NA", "CA", "FA","FA"] },
    { palavra: "ABACATE", emoji: "🥑", silabas: ["A", "BA", "CA", "TE"], opcoes: ["BA", "MA", "TE", "CA", "A","FA"] },
    { palavra: "LARANJA", emoji: "🍊", silabas: ["LA", "RAN", "JA"], opcoes: ["LA", "MA", "JA", "CA", "FA","RAN"] },
    { palavra: "MORANGO", emoji: "🍓", silabas: ["MO", "RAN", "GO"], opcoes: ["MO", "MA", "GO", "CA", "FA","RAN"] },
    { palavra: "AVIÃO", emoji: "✈️", silabas: ["A","VI","ÃO"], opcoes: ["FA", "VI", "MA", "A", "ÃO","FA"] },
   { palavra: "PEIXE", emoji: "🐟", silabas: ["PE","I","XE"], opcoes: ["PI", "E", "I", "PE", "XE","FA"] },
   { palavra: "CACHORRO", emoji: "🐶", silabas: ["CA","CHO","RRO"], opcoes: ["PA", "CHO", "RRO", "MA", "CA","FA"] },
   { palavra: "ELEFANTE", emoji: "🐘", silabas: ["E","LE","FAN","TE"], opcoes: ["LE", "PE", "FAN", "TE", "MA","E"] },
   { palavra: "ABACAXI", emoji: "🍍", silabas: ["A","BA","CA","XI"], opcoes: ["BA", "MA", "XI", "CA", "A","FA"] },
   { palavra: "MELANCIA", emoji: "🍉", silabas: ["ME","LAN","CIA"], opcoes: ["ME", "FA", "CIA", "MA", "FA","LAN"] },
];
// Variável para controlar o índice da palavra atual
let indicePalavraAtual = 0;
let silabasSelecionadas = [];
// Função para criar a palavra com base no índice atual
function criarPalavra() {
    // pega a palavra atual do array de palavras
    let palavraAtual = palavrasDoJogo[indicePalavraAtual];
    // mostra o emoji correspondente à palavra atual
    document.getElementById("emoji").innerText = palavraAtual.emoji;
    //mostra as sílabas da palavra atual
    document.getElementById("silabas-montadas").innerText = "";
    // limpa o resultado anterior
    document.getElementById("resultado").innerText = "";
    // limpa as sílabas selecionadas
    silabasSelecionadas = [];
    // cria os botões de sílabas com base nas opções da palavra atual
    let silabasContainer = document.getElementById("silabas");
    silabasContainer.innerHTML = "";

    palavraAtual.opcoes.forEach(silaba => {
        let button = document.createElement("button");
        button.innerText = silaba;

        button.onclick = () => selecionarSilaba(silaba, button);

        silabasContainer.appendChild(button);
    });
}
// Função para selecionar uma sílaba e verificar se a palavra formada está correta
function selecionarSilaba(silaba, button) {
    // adiciona a sílaba selecionada ao array de sílabas selecionadas
    let palavraAtual = palavrasDoJogo[indicePalavraAtual];
    // so deixa rodar se ainda não estourou o limite de sílabas da palavra atual
    if (silabasSelecionadas.length < palavraAtual.silabas.length) {
        silabasSelecionadas.push(silaba);
        // atualiza o display das sílabas montadas
        document.getElementById("silabas-montadas").innerText = silabasSelecionadas.join("");
        // desabilita o botão da sílaba selecionada
        button.disabled = true;

        // verifica se a palavra formada está correta
        if (silabasSelecionadas.length === palavraAtual.silabas.length) {
            let palavraFormada = silabasSelecionadas.join("");
            if (palavraFormada === palavraAtual.palavra) {
                document.getElementById("resultado").innerText = "Parabéns! Você formou a palavra corretamente!";
                document.getElementById("resultado").style.color = "green";
                soltarConfetti();
            } else {
                document.getElementById("resultado").innerText = "Ops! A palavra formada está incorreta. Tente novamente!";
                document.getElementById("resultado").style.color = "red";
            }
        }
    }
}
// Função para exibir confetes na tela
function soltarConfetti() {
    confetti({
        particleCount: 150,  // Quantidade de confetes
        spread: 80,         // O quanto eles vão se espalhar para os lados
        origin: { y: 0.6 }  // De onde eles vão sair na tela (0.6 é perto dos botões)
    });
}  
// Função para avançar para a próxima palavra
function novaPalavra() {
    // incrementa o índice da palavra atual, voltando ao início se necessário
    indicePalavraAtual = (indicePalavraAtual + 1) % palavrasDoJogo.length;
    // cria a nova palavra
    criarPalavra();
}
// função para modo noturno
function toggleDarkMode() {
    document.body.classList.add("com-transicao");

    document.body.classList.toggle("dark-mode");
    
    let botao = document.getElementById("btn-noturno");   
    let resultado = document.getElementById("resultado");

    if (document.body.classList.contains("dark-mode")) {
        botao.innerText = "☀️"; 
    
    } else {
        botao.innerText = "🌙"; 
    }
}
  
//reinicia o jogo
criarPalavra();