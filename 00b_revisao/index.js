// 1.
// [] adicionar a tag <script> no html
// [] verificar se está lendo index.js
// [] alterar cor de <body>
// [] escutar o clique do botão
// [] criar função de alterar a cor usando rgb()
// [] usar Math.random() e Math.floor() ou parseInt()

const body = document.body;
const botao = document.getElementById("trocaCor");

body.style.backgroundColor = "purple";
botao.addEventListener('click', () => {
    const r = geraInteiro(255);
    const g = geraInteiro(255);
    const b = geraInteiro(255);

    body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")"
    console.log("rgb(" + r + ", " + g + ", " + b + ")");
    console.log(r, g, b)
})


// Arrow function =>, metodo mais pratico de criar funcao.
// sempre colocar = depois do nome da function
// pode ser sem parenteses se for um unico parametro

geraInteiro = num => parseInt(Math.random() * num);


// ------------------------------------------------------------------------
// 2. melhorando o código
// [] remover repetição de código
// [] anonymous function
// [] arrow function
// [] template string