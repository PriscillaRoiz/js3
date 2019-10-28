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

botao.addEventListener('click', mudaCor)
function geraInteiro(){
    const n = parseInt(Math.random() * 255);
    return n; 
}
function mudaCor(){
const r = parseInt(Math.random() * 255);
const g = parseInt(Math.random() * 255);
const b = parseInt(Math.random() * 255);

body.style.backgroundColor = "rgb(" + r + ", "+ g + ", "+ b +")"
console.log("rgb(" + r + ", "+ g + ", "+ b +")");
console.log(r,g,b)
}