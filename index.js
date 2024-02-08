const perguntas = [
  {
    pergunta: "Qual é a sintaxe correta para referenciar um script externo chamado 'xxx.js'?",
    respostas: [
      "<script href='xxx.js'>",
      "<script name='xxx.js'>",
      "<script src='xxx.js'>",
    ],
    correta: 2
  },
  {
    pergunta: "Como você escreve 'Hello World' em uma caixa de alerta?",
    respostas: [
      "msgBox('Hello World');",
      "alertBox('Hello World');",
      "alert('Hello World');",
    ],
    correta: 2
  },
  {
    pergunta: "Como você cria uma variável chamada 'carName'?",
    respostas: [
      "variable carName;",
      "var carName;",
      "v carName;",
    ],
    correta: 1
  },
  {
    pergunta: "Como você pode adicionar um comentário em uma linha no JavaScript?",
    respostas: [
      "//This comment",
      "<!--This comment-->",
      "'This comment",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a maneira correta de escrever um array em JavaScript?",
    respostas: [
      "var colors = (1:'red', 2:'green', 3:'blue')",
      "var colors = 'red', 'green', 'blue'",
      "var colors = ['red', 'green', 'blue']",
    ],
    correta: 2
  },
  {
    pergunta: "Como você arredonda o número 7.25 para o número inteiro mais próximo?",
    respostas: [
      "rnd(7.25)",
      "Math.rnd(7.25)",
      "Math.round(7.25)",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a maneira correta de definir uma função em JavaScript?",
    respostas: [
      "function:myFunction()",
      "function = myFunction()",
      "function myFunction()",
    ],
    correta: 2
  },
  {
    pergunta: "Como você chama uma função chamada 'myFunction'?",
    respostas: [
      "call function myFunction()",
      "call myFunction()",
      "myFunction()",
    ],
    correta: 2
  },
  {
    pergunta: "Como você escreve uma condição IF em JavaScript?",
    respostas: [
      "if i = 5 then",
      "if i == 5 then",
      "if (i == 5)",
    ],
    correta: 2
  },
  {
    pergunta: "Como você pode detectar o navegador do cliente?",
    respostas: [
      "navigator.appName",
      "browser.name",
      "client.navName",
    ],
    correta: 0
  },
  {
    pergunta: "Como você declara uma variável JavaScript de escopo de bloco?",
    respostas: [
      "var myVariable;",
      "let myVariable;",
      "const myVariable;",
    ],
    correta: 1
  },
  {
    pergunta: "Qual método você usaria para converter uma string em um número inteiro?",
    respostas: [
      "Number.parseInt()",
      "Number.parse()",
      "Number.int()",
    ],
    correta: 0
  },
  {
    pergunta: "Qual objeto você usaria para trabalhar com datas?",
    respostas: [
      "Date",
      "Time",
      "Calendar",
    ],
    correta: 0
  },
  {
    pergunta: "Como você declara uma função anônima?",
    respostas: [
      "function() {}",
      "function = () {}",
      "() => {}",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a maneira correta de verificar se duas variáveis são iguais em valor e tipo?",
    respostas: [
      "x == y",
      "x === y",
      "x = y",
    ],
    correta: 1
  },
  {
    pergunta: "Como você acessa o primeiro elemento de um array chamado 'myArray'?",
    respostas: [
      "myArray[0]",
      "myArray[1]",
      "myArray.first",
    ],
    correta: 0
  },
  {
    pergunta: "Como você adiciona um elemento ao final de um array?",
    respostas: [
      "push()",
      "pop()",
      "add()",
    ],
    correta: 0
  },
  {
    pergunta: "Como você pode efetivamente interromper um loop?",
    respostas: [
      "break",
      "stop",
      "exit",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a maneira correta de criar um objeto em JavaScript?",
    respostas: [
      "var obj = {}",
      "var obj = Object()",
      "Ambas as opções estão corretas",
    ],
    correta: 2
  },
  {
    pergunta: "Qual método você usaria para codificar uma URL em JavaScript?",
    respostas: [
      "url.encode()",
      "encodeURI()",
      "encodeURIComponent()",
    ],
    correta: 1
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