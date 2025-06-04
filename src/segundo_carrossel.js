const vitrine = document.querySelector('.vitrine').style

const trilho = document.querySelector(".trilho");
// Pega o trilo

const bloco = document.querySelector(".bloco").offsetWidth;
// Pega o tamanho dos blocos (sem contar com a margin)

let quantidade_exposta = getComputedStyle(document.body).getPropertyValue('--quantidade_exposta');

const marginLeft = parseInt(
    getComputedStyle(document.querySelector(".bloco"))
    .marginLeft
    .split("px")[0]
);
const marginRight = parseInt(
    getComputedStyle(document.querySelector(".bloco"))
    .marginRight
    .split("px")[0]
);
const margin = marginRight + marginLeft;
// Pega as margins e junta elas (left + right)

const inicio = -20;
// Define o ponto zero do trilho

let limite = trilho.clientWidth - bloco * quantidade_exposta - bloco;
// Pega o tamanho do trilho,
// diminui pelo tamanho do bloco vezes a quantidade de blocos que aparecem por vez + 1.
// Por que fiz assim? Desse jeito o carrossel funciona diferentes tamanhos de telas

trilho.style.transform = `translateX(${inicio}px)`;
// Esse é o "Start" do sistem, só começa depois que essa linha roda


vitrine.maxWidth = `${bloco * quantidade_exposta + bloco - margin}px`
// O tamanho da vitrine é alterado de acordo com a quantidade de blocos expostos

setInterval(() => {
    quantidade_exposta = getComputedStyle(document.body).getPropertyValue('--quantidade_exposta');
    // Pega o valor atual da quantidade de itens expostos

    limite = trilho.clientWidth - bloco * quantidade_exposta - bloco;
    // Atualiza os valores de limite, para o trilho saber até onde ele pode ir (É pra evitar problemas no redisionamento da tela)
    
    vitrine.maxWidth = `${bloco * quantidade_exposta + bloco - margin}px`
    // Atualiza o tamanho da vitrine para se encaixar na tela

    let x = trilho.style.transform
    .split("translateX(")[1]
    .split("px)")[0];
    // Pega a posição atual do trilho, e a movimentação funciona em cima desse valor

    if (x < -limite) {
        // Pega o valor limite e deixa ele em negativo
        trilho.style.transform = `translateX(${inicio}px)`;
        // Volta pro ponto zero
    } else {
        trilho.style.transform = `translateX(${x - bloco - margin}px)`;
        // Pega a posição atual do trilho e diminui pelo tamanho do bloco e das margins laterais
    }

    console.log(`limite: ${limite}; atual: ${x}`)
}, 3000);
