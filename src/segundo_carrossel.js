// Carrossel
const itens = document.querySelectorAll('.bloco');
const trilho = document.getElementById('trilho');
const styles_trilho = window.getComputedStyle(trilho);
const tamanho_do_trilho = +styles_trilho.getPropertyValue('width').split('px')[0];

// Pega o tamanho dos itens de acordo com o tamanho do trilho
const tamanho_bloco = tamanho_do_trilho / itens.length;

/* Número de itens visíveis simultaneamente no carrossel */
const quantidade_exposta = +getComputedStyle(document.documentElement).getPropertyValue('--quantidade_exposta');

/* Tempo que o carrossel demora para andar */
const velocidade = getComputedStyle(document.documentElement).getPropertyValue('--tempo_carrossel');

/* Quantidade de itens que o carrossel avança por ciclo */
const valorCss = +getComputedStyle(document.documentElement).getPropertyValue('--casas_por_giro');
const casa_por_giro = valorCss > quantidade_exposta ? quantidade_exposta : valorCss;

let casa_carrossel = quantidade_exposta;

function carrossel() {

    // Faz o calculo de quantos itens faltam
    const falta = itens.length - casa_carrossel;

    // Pega o valor de translateX do trilho
    const matrix = new DOMMatrixReadOnly(styles_trilho.transform);
    let translateX = +matrix.m41;

    // Se não houver mais casas para percorrer, reinicia o carrossel
    if (casa_carrossel >= itens.length) {
        translateX = 0;
        casa_carrossel = quantidade_exposta - casa_por_giro;
    }

    // Se o número de casas_por_giro for maior que a quantidade de casas faltantes,
    // desacelera o carrossel proporcionalmente ao tamanho dos itens
    else if (casa_por_giro > falta && falta > 0) translateX -= tamanho_bloco * falta;

    // Caso contrário, continua normalmente com o deslocamento padrão
    else translateX -= tamanho_bloco * casa_por_giro;

    // Atualiza o progresso do carrossel, somando as casas percorridas
    casa_carrossel += casa_por_giro;

    // Aplica a nova posição ao trilho
    trilho.style.setProperty('transform', `translateX(${translateX}px)`);
};

// Ativa o carrossel apenas se houver mais itens do que os visíveis simultaneamente
let ativar_carrossel;
if (itens.length > quantidade_exposta) ativar_carrossel = setInterval(() => { carrossel() }, velocidade * 1000);