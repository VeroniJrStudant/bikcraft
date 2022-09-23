// ATIVAR LINKS DO MENU
const links = document.querySelectorAll(".header-menu a");

//MÉTODO .includes("a") VERIFICAR SE UMA STRING EXISTE EM JAVASCRIPT
console.log("javascript".includes("a"));

function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  url.includes;
  if (url.includes(href)) {
    link.classList.add("ativo");
    console.log(link);
  }

  console.log(url);
  console.log(href);
}

links.forEach(ativarLink);

// ITENS DO ORÇAMENTO

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
  elemento.checked = true;
}

parametros.forEach(ativarProduto);

// PERGUNTAS FREQUENTE

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currenttarget;

  console.log(pergunta);
}

function eventosPerguntas(pergunta) {
  console.log(pergunta);
  pergunta.addEventListener("click", ativarPergunta);
}
perguntas.forEach(eventosPerguntas);

console.log(perguntas);
