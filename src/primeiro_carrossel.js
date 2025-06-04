var lastIndex = 0,
    // Serve para saber qual foi a ultima imagem clicada
    index = 0,
    inativo = true;

const comentarios = document.querySelectorAll(
    ".container .container-single"
);
// Array de comentarios

var botoes_container = document.querySelector(".bullets");
// array de botões clicaveis

botoes_container.addEventListener("click", (click) => {
    inativo = false;
    renderizar(click.target.id);
    document.querySelector(".container").style.border = "2px solid red";
    setTimeout(() => {
        inativo = true;
    }, 15000);

    /* 
      Adiciona um EventListener no container inteiro.
      Ao ser clicado, ele ativa tudo e manda a id do botão clicado para o renderizar()                    
    */
});

function renderizar(id) {
    if (id == "prev") {
        index--;
        if (index < 0) {
            index = comentarios.length - 1;
        }
    } else if (id == "prox") {
        index++;
        if (index >= comentarios.length) {
            index = 0;
        }
    }
    /*
      O renderizar pode ser puxado com as possiveis chamadas "prev" e "prox".
      Se a chamada for "prev", ele diminui o numero do index (é a ID da imagem atual) em 1 para voltar. Se o numero já for 0, então ele muda pro valor maximo da array (-1).
      Se a chamada for "prox", então ele aumenta o index em 1. Se o index ja tiver no seu valor maximo, então ele volta pra 0.
    */

    // console.log(`id: ${id} index: ${index} tamanho: ${comentarios.length}`);

    document.querySelectorAll(".container .container-single")[lastIndex].style.opacity = 0;
    document.querySelectorAll(".container .container-single")[index].style.opacity = 1;

    lastIndex = index;
    /*
      Registra a imagem atual como "last-index" para ser escondida na proxima vez que a function for chamada.
    */
}

setInterval(() => {
    if (inativo == true) {
        renderizar("prox");
        document.querySelector(".container").style.border = "";
    }
}, 5000);
/*
  A cada 5 segundos verifica se está inativo, se a resposta for "não" ele só passa direto, se a resposta for "sim" ele passa para a proxima imagem/botão.
*/