const perguntas = [
  {
    pergunta: "Qual é o nome do protagonista de The Legend of Zelda?",
    respostas: [
      "Zelda",
      "Link",
      "Ganon",
      "Navi"
    ],
    correta: 1 // Link
  },
  {
    pergunta: "Qual é o nome do mascote da SEGA?",
    respostas: [
      "Mario",
      "Sonic",
      "Crash",
      "Kirby"
    ],
    correta: 1 // Sonic
  },
  {
    pergunta: "Qual é o nome do jogo que popularizou o gênero battle royale?",
    respostas: [
      "Fortnite",
      "PUBG",
      "Minecraft",
      "Call of Duty"
    ],
    correta: 1 // PUBG
  },
  {
    pergunta: "Qual é o nome do criador de Minecraft?",
    respostas: [
      "Markus Persson",
      "Gabe Newell",
      "Hideo Kojima",
      "Shigeru Miyamoto"
    ],
    correta: 0 // Markus Persson
  },
  {
    pergunta: "Qual é o nome do console mais vendido de todos os tempos?",
    respostas: [
      "PlayStation 2",
      "Nintendo Wii",
      "Xbox 360",
      "PlayStation 4"
    ],
    correta: 0 // PlayStation 2
  },
  {
    pergunta: "Qual é o nome do primeiro jogo da série Final Fantasy?",
    respostas: [
      "Final Fantasy",
      "Final Fantasy II",
      "Final Fantasy III",
      "Final Fantasy IV"
    ],
    correta: 0 // Final Fantasy
  },
  {
    pergunta: "Qual é o nome do personagem que acompanha Lara Croft em Tomb Raider?",
    respostas: [
      "Winston",
      "Sam",
      "Jonah",
      "Zip"
    ],
    correta: 3 // Zip
  },
  {
    pergunta: "Qual é o nome do jogo que inspirou o filme Matrix?",
    respostas: [
      "Deus Ex",
      "System Shock",
      "Half-Life",
      "Ghost in the Shell"
    ],
    correta: 1 // System Shock
  },
  {
    pergunta: "Qual é o nome do jogo que foi lançado junto com o Nintendo 64?",
    respostas: [
      "Super Mario 64",
      "The Legend of Zelda: Ocarina of Time",
      "GoldenEye 007",
      "Mario Kart 64"
    ],
    correta: 0 // Super Mario 64
  },
  {
    pergunta: "Qual é o nome do jogo que introduziu o modo cooperativo online em Halo?",
    respostas: [
      "Halo: Combat Evolved",
      "Halo 2",
      "Halo 3",
      "Halo: Reach"
    ],
    correta: 1 // Halo 2
  },
  {
    pergunta: "Qual é o nome do jogo que foi o primeiro a usar a tecnologia de captura de movimento?",
    respostas: [
      "Mortal Kombat",
      "Prince of Persia",
      "Street Fighter II",
      "Donkey Kong Country"
    ],
    correta: 0 // Mortal Kombat
  },
  {
    pergunta: "Qual é o nome do jogo que foi o primeiro a ter uma trilha sonora original?",
    respostas: [
      "Pong",
      "Space Invaders",
      "Pac-Man",
      "Super Mario Bros."
    ],
    correta: 3 // Super Mario Bros.
  },
  {
    pergunta: "Qual é o nome do jogo que foi o primeiro a ter um enredo e personagens?",
    respostas: [
      "Adventure",
      "Zork",
      "King's Quest",
      "The Secret of Monkey Island"
    ],
    correta: 0 // Adventure
  },
  {
    pergunta: "Qual é o nome do jogo que foi o primeiro a ter gráficos 3D poligonais?",
    respostas: [
      "Doom",
      "Wolfenstein 3D",
      "Star Fox",
      "Alone in the Dark"
    ],
    correta: 2 // Star Fox
  },
  {
    pergunta: "Qual é o nome do jogo que foi o primeiro a ter um modo multiplayer online?",
    respostas: [
      "Doom",
      "Quake",
      "Counter-Strike",
      "Halo"
    ],
    correta: 1 // Quake
  },
  {
    pergunta: "Qual é o nome do jogo que foi o primeiro a ter um mundo aberto?",
    respostas: [
      "Grand Theft Auto",
      "The Elder Scrolls",
      "The Legend of Zelda",
      "Ultima"
    ],
    correta: 3 // Ultima
  },
  {
    pergunta: "Qual é o nome do jogo que foi o primeiro a ter uma inteligência artificial avançada?",
    respostas: [
      "F.E.A.R.",
      "Half-Life",
      "Metal Gear Solid",
      "SimCity"
    ],
    correta: 0 // F.E.A.R.
  },
  {
    pergunta: "Qual é o nome do jogo que foi o primeiro a ter uma narrativa não-linear?",
    respostas: [
      "Heavy Rain",
      "Mass Effect",
      "The Stanley Parable",
      "The Witcher"
    ],
    correta: 2 // The Stanley Parable
  },
  {
    pergunta: "Qual é o nome do jogo que foi o primeiro a ter uma câmera em primeira pessoa?",
    respostas: [
      "Wolfenstein 3D",
      "Dungeon Master",
      "Maze War",
      "Battlezone"
    ],
    correta: 2 // Maze War
  },
  {
    pergunta: "Qual é o nome do jogo que foi o primeiro a ter uma trilha sonora orquestrada?",
    respostas: [
      "Final Fantasy VI",
      "The Legend of Zelda: Ocarina of Time",
      "Dragon Quest VIII",
      "Shadow of the Colossus"
    ],
    correta: 3 // Shadow of the Colossus
  },
  {
    pergunta: "Qual é o nome do jogo que foi o primeiro a ter um sistema de moralidade?",
    respostas: [
      "Fable",
      "Fallout",
      "Knights of the Old Republic",
      "Black & White"
    ],
    correta: 1 // Fallout
  },
  {
    pergunta: "Qual é o nome do jogo que foi o primeiro a ter um modo de criação de personagem?",
    respostas: [
      "The Sims",
      "Ultima Online",
      "Dungeons & Dragons",
      "WWE SmackDown!"
    ],
    correta: 2 // Dungeons & Dragons
  },
  {
    pergunta: "Qual é o nome do jogo que foi o primeiro a ter um modo de realidade virtual?",
    respostas: [
      "Resident Evil 7",
      "Half-Life: Alyx",
      "Superhot VR",
      "Dactyl Nightmare"
    ],
    correta: 3 // Dactyl Nightmare
  },
  {
    pergunta: "Qual é o nome do jogo que foi o primeiro a ter um modo de stealth?",
    respostas: [
      "Metal Gear Solid",
      "Thief: The Dark Project",
      "Splinter Cell",
      "Castle Wolfenstein"
    ],
    correta: 3 // Castle Wolfenstein
  },
  {
    pergunta: "Qual é o nome do jogo que foi o primeiro a ter um modo de sandbox?",
    respostas: [
      "Minecraft",
      "Garry's Mod",
      "LittleBigPlanet",
      "SimCity"
    ],
    correta: 3 // SimCity
  },
  {
    pergunta: "Qual é o nome do jogo que foi o primeiro a ter um modo de parkour?",
    respostas: [
      "Mirror's Edge",
      "Assassin's Creed",
      "Prince of Persia: The Sands of Time",
      "Tomb Raider"
    ],
    correta: 2 // Prince of Persia: The Sands of Time
  },
  {
    pergunta: "Qual é o nome do jogo que foi o primeiro a ter um modo de bullet time?",
    respostas: [
      "Max Payne",
      "The Matrix: Path of Neo",
      "Stranglehold",
      "F.E.A.R."
    ],
    correta: 0 // Max Payne
  }

]



// cria uma variavel de conteudo imutavel chamada template de conteudo <template> do HTML5
const template = document.querySelector('template');
// cria uma variavel constante (conteudo imutavel) chamada quiz, de conteudo da id quiz do HTML5
const quiz = document.querySelector('#quiz');


const corretas = new Set();
// totalDePerguntas: (camelCase) estilo de nomenclatura de texto usado em programação que combina várias palavras em uma única palavra, em que a primeira letra de cada palavra é escrita em maiúscula, exceto a primeira palavra.
const totalDePerguntas = perguntas.length; // conta o total de perguntas!
const mostrarTotal = document.querySelector('#acertos span');
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;


// loop, laço de repetição (para/faça)
for(const item of perguntas) {
  // constante quizItem de conteudo clonado da constante template.
  const quizItem = template.content.cloneNode(true);
  // dentro da quizItem seleciona o texto da tag h3 e transforma ele no conteudo da item.pergunta.
  quizItem.querySelector('h3').textContent = item.pergunta;

  
  for(let resposta of item.respostas) {
    // constante dt de conteudo clonado de: dentro da quizItem a tag dt dentro da tag dl.
    const dt = quizItem.querySelector('dl dt').cloneNode(true);
    // dentro da constante dt, a tag span se recebe o conteudo da let (inconstante) reposta (variavel criada no loop, referente a cada item.respostas de cada pergunta).
    dt.querySelector('span').textContent = resposta;
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item));
    dt.querySelector('input'). value = item.respostas.indexOf(resposta);

    // == comparacao SEM considerar o tipo (numero, string, etc)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta;
      
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
      // atualizar os acertos a cada loop
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
    }

    // dentro da quizItem, exibir o conteudo das tags dt.
    quizItem.querySelector('dl').appendChild(dt);
  }

  // remove a exibicao da tag dl.dt da variavel quizItem apos feito todo o uso necessario dela.
  quizItem.querySelector('dl dt').remove();
  
  // coloca a pergunta na tela
  quiz.appendChild(quizItem);
}