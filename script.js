// AS palavras do jogo são definidas em um array de objetos, cada objeto contém a palavra, o emoji correspondente, as sílabas e as opções de sílabas para formar a palavra.
let palavrasDoJogo = [
    { palavra: "BOLO", emoji: "🎂", silabas: ["BO", "LO"], opcoes: ["GA", "LO", "CA", "MA", "PA","BO"] },
    { palavra: "BOLA", emoji: "⚽", silabas: ["BO", "LA"], opcoes: ["BA", "LA", "TA", "RE", "BO","MA"] },
    { palavra: "GATO", emoji: "🐱", silabas: ["GA", "TO"], opcoes: ["GO", "TO", "GA", "LI", "PA","RO"] },
    { palavra: "CASA", emoji: "🏠", silabas: ["CA", "SA"], opcoes: ["PA", "SA", "MA", "CA", "DA","FA"] },
    { palavra: "DADO", emoji: "🎲", silabas: ["DA", "DO"], opcoes: ["FA", "DO", "MA", "PA", "DA","FA"] },
    { palavra: "CARRO", emoji: "🚗", silabas: ["CA", "RRO"], opcoes: ["PA", "RRO", "MA", "CA", "FA","FA"] },
    { palavra: "BANANA", emoji: "🍌", silabas: ["BA", "NA", "NA"], opcoes: ["BA", "MA", "NA", "CA", "NA","FA"] },
    { palavra: "ABACATE", emoji: "🥑", silabas: ["A", "BA", "CA", "TE"], opcoes: ["BA", "MA", "TE", "CA", "A","FA"] },
    { palavra: "LARANJA", emoji: "🍊", silabas: ["LA", "RAN", "JA"], opcoes: ["LA", "MA", "JA", "CA", "FA","RAN"] },
    { palavra: "MORANGO", emoji: "🍓", silabas: ["MO", "RAN", "GO"], opcoes: ["MO", "MA", "GO", "CA", "FA","RAN"] },
    { palavra: "AVIÃO", emoji: "✈️", silabas: ["A","VI","ÃO"], opcoes: ["FA", "VI", "MA", "A", "ÃO","FA"] },
   { palavra: "PEIXE", emoji: "🐟", silabas: ["PE","I","XE"], opcoes: ["PI", "E", "I", "PE", "XE","FA"] },
   { palavra: "CACHORRO", emoji: "🐶", silabas: ["CA","CHO","RRO"], opcoes: ["PA", "CHO", "RRO", "MA", "CA","FA"] },
   { palavra: "ELEFANTE", emoji: "🐘", silabas: ["E","LE","FAN","TE"], opcoes: ["LE", "PE", "FAN", "TE", "MA","E"] },
   { palavra: "ABACAXI", emoji: "🍍", silabas: ["A","BA","CA","XI"], opcoes: ["BA", "MA", "XI", "CA", "A","FA"] },
   { palavra: "MELANCIA", emoji: "🍉", silabas: ["ME","LAN","CIA"], opcoes: ["ME", "FA", "CIA", "MA", "FA","LAN"] },
   { palavra: "GALO", emoji: "🐓", silabas: ["GA","LO"], opcoes: ["ME", "GA", "CIA", "MA", "FA","LO"] },
   { palavra: "PÃO", emoji: "🍞", silabas: ["PÃO"], opcoes: ["PA", "PÃO", "MÃO", "NÃO", "DÃO", "BÃO"]},
   { palavra: "COPO", emoji: "🥛", silabas:["CO","PO"], opcoes:["PO","DO","CO","MO","GO","TO"]},
   { palavra: "FACA", emoji:"🔪", silabas:["FA","CA"], opcoes:["BA","CA","FA","GA","DA","SA"]},
   { palavra: "FOCA", emoji:"🦭", silabas:["FO","CA"], opcoes:["BA","MA","FO","GA","CA","SA"]},
   { palavra: "CAMA", emoji: "🛏️", silabas: ["CA","MA"], opcoes: ["ME", "GA", "CA", "DA", "MA","LO"] },
   { palavra: "CELULAR", emoji: "📱", silabas: ["CE","LU","LAR"],opcoes:["LAR","CE","CA","LU","PA","DU"]},
   { palavra:"SAPATO", emoji:"👟", silabas:["SA","PA","TO"],opcoes:["DO","SA","DI","TO","TU","PA"]},
   {palavra:"CAMISA", emoji:"👕", silabas:["CA","MI","SA"],opcoes:["DO","CA","SA","TO","MI","PA"]},
    {palavra:"COBRA", emoji:"🐍", silabas:["CO","BRA"],opcoes:["DO","CO","SA","BRA","MI","PA"]},
    {palavra:"BODE", emoji:"🐐", silabas:["BO","DE"],opcoes:["BO","CA","SA","TO","MI","DE"]},
    {palavra:"OVELHA", emoji:"🐑", silabas:["O","VE","LHA"],opcoes:["O","CA","VE","TO","MI","LHA"]},
    {palavra:"OVO", emoji:"🥚", silabas:["O","VO"],opcoes:["DO","CA","SA","VO","MI","O"]},
    {palavra:"UVA", emoji:"🍇",silabas:["U","VA"],opcoes:["DO","U","SA","VA","MI","O"]},
    {palavra:"MOTO", emoji:"🏍️",silabas:["MO","TO"],opcoes:["DO","TO","SA","VA","MI","MO"]},
    {palavra:"BICICLETA",emoji:"🚲",silabas:["BI","CI","CLE","TA"],opcoes:["TA","MO","BI","CLE","CI","PA"]},
    {palavra:"PORCO",emoji:"🐖",silabas:["POR","CO",],opcoes:["TA","CO","BRA","CE","POR","PA"]},
    {palavra:"VÓVÓ",emoji:"👩‍🦳",silabas:["VÓ","VÓ",],opcoes:["TA","VÓ","BRA","CE","SIL","VÓ"]},
    {palavra:"PÉ",emoji:"🦶🏻",silabas:["PÉ"],opcoes:["TA","PÉ","BA","CE","SIL","VÓ"]},
    {palavra:"MENINO",emoji:"🧒",silabas:["ME","NI","NO"],opcoes:["TA","ME","BA","CE","NI","NO"]},
    {palavra:"OLHO",emoji:"👀",silabas:["O","LHO"],opcoes:["TA","PÉ","O","CE","LHO","VÓ"]},
    {palavra:"CAVALO",emoji:"🐎",silabas:["CA","VA","LO"],opcoes:["VA","JU","CA","ME","LO","TO"]},
    {palavra:"ARANHA",emoji:"🕷️",silabas:["A","RA","NHA"],opcoes:["TA","RA","BA","CE","NHA","A"]},
    {palavra:"VACA",emoji:"🐄",silabas:["VA","CA"],opcoes:["TA","VA","BA","CE","CA","VU"]},
    {palavra:"SAPO",emoji:"🐸",silabas:["SA","PO"],opcoes:["TA","SA","BA","CE","SIL","PO"]},
    {palavra:"JUMENTO",emoji:"🫏",silabas:["JU","MEN","TO"],opcoes:["TA","JU","BA","CE","MEN","TO"]},
    {palavra:"SOL",emoji:"🌞",silabas:["SOL"],opcoes:["TA","PA","BA","CE","SOL","LO"]},
    {palavra:"LUA",emoji:"🌙",silabas:["LUA"],opcoes:["TA","LUA","BA","CE","SI","VÓ"]},
    {palavra:"FOGO",emoji:"🔥",silabas:["FO","GO"],opcoes:["TU","GO","DI","FO","MO","LA"]},
    {palavra:"CADEIRA",emoji:"🪑",silabas:["CA","DE","I","RA"],opcoes:["DE","GO","I","RA","MU","CA"]},
    {palavra:"CADERNO",emoji:"📒",silabas:["CA","DER","NO"],opcoes:["DE","NO","DER","RA","MU","CA"]},
    {palavra:"PINTO",emoji:"🐥",silabas:["PIN","TO"],opcoes:["DE","GO","PIN","RA","TO","CA"]}, 
    {palavra:"MÃO",emoji:"🖐🏻",silabas:["MÃO"],opcoes:["DE","GO","PI","MÃO","MU","CA"]},
    {palavra:"SORVETE",emoji:"🍦",silabas:["SOR","VE","TE"],opcoes:["RE","VE","PI","SOR","TE","CA"]},
    {palavra:"VELA",emoji:"🕯️",silabas:["VE","LA"],opcoes:["RE","VE","PO","LA","TE","CA"]},
    {palavra:"MALA",emoji:"🧳",silabas:["MA","LA"],opcoes:["RE","VE","PI","MA","TE","MA"]},
    {palavra:"MACACO",emoji:"🐒",silabas:["MA","CA","CO"],opcoes:["RE","CO","PI","MA","TE","CA"]},
    {palavra:"BORBOLETA",emoji:"🦋",silabas:["BOR","BO","LE","TA"],opcoes:["BO","VE","BOR","MA","LE","TA"]},
    {palavra:"MANGA",emoji:"🥭",silabas:["MAN","GA"],opcoes:["RE","GA","PI","MAN","TE","CA"]},
    {palavra:"COLHER",emoji:"🥄",silabas:["CO","LHER"],opcoes:["RE","CO","LI","MA","LHER","CA"]},
    {palavra:"VÔVÔ",emoji:"👨‍🦳",silabas:["VÔ","VÔ"],opcoes:["RE","VE","VÔ","MA","VÔ","CA"]}, 
    {palavra:"MENINA",emoji:"👧",silabas:["ME","NI","NA"],opcoes:["NA","VE","NI","MA","ME","CA"]},
    {palavra:"LINGUA",emoji:"👅",silabas:["LIN","GU","A"],opcoes:["RE","GU","LIN","MA","VRO","A"]},
    {palavra:"BOCA",emoji:"👄",silabas:["BO","CA"],opcoes:["RE","VE","LI","MA","BO","CA"]},
    {palavra:"DENTE",emoji:"🦷",silabas:["DEN","TE"],opcoes:["TE","VU","LI","MA","DEN","CA"]},
    {palavra:"CEREBRO",emoji:"🧠",silabas:["CE","RE","BRO"],opcoes:["RE","VE","CE","MA","BRO","CA"]},
    {palavra:"NARIZ",emoji:"👃🏻",silabas:["NA","RIZ"],opcoes:["RE","VE","RIZ","MA","NA","CA"]},
    {palavra:"CHAVE",emoji:"🗝️",silabas:["CHA","VE",],opcoes:["PO","VE","LI","CHA","O","CA"]},
    {palavra:"ÓCULOS",emoji:"👓",silabas:["Ó","CU","LOS"],opcoes:["CU","RE","LOS","LHA","Ó","CA"]},
    {palavra:"PORTA",emoji:"🚪",silabas:["POR","TA"],opcoes:["DO","RE","TA","LHA","PRO","CA"]},
    {palavra:"JANELA",emoji:"🪟",silabas:["JA","NE","LA"],opcoes:["PO","JA","LI","LA","NE","CA"]},
    {palavra:"UNHA",emoji:"💅",silabas:["U","NHA"],opcoes:["PO","U","LI","NHA","O","CA"]},
    {palavra:"TELIVISÃO",emoji:"📺",silabas:["TE","LE","VI","SÃO"],opcoes:["PO","TE","VI","SÃO","LE","CA"]},
    {palavra:"CANETA",emoji:"🖋️",silabas:["CA","NE","TA"],opcoes:["PO","TA","LI","NE","O","CA"]},
    {palavra:"LAPIS",emoji:"✏️",silabas:["LA","PIS"],opcoes:["PO","PIS","FI","LA","O","CA"]},
    {palavra:"PNEU",emoji:"🛞",silabas:["P","NEU"],opcoes:["PO","P","FI","LA","NEU","CA"]},
    {palavra:"BONÉ",emoji:"🧢",silabas:["BO","NÉ"],opcoes:["PO","NÉ","FI","LA","BO","CA"]},               
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