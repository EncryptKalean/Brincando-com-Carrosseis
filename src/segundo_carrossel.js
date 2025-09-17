const blocos = document.querySelectorAll('.bloco');
const trilho = document.getElementById('trilho');
const styles_trilho = window.getComputedStyle(trilho);
const tamanho_do_trilho = +styles_trilho.getPropertyValue('width').split('px')[0];

// Pega o tamanho dos blocos de acordo com o tamanho do trilho
const tamanho_bloco = tamanho_do_trilho / blocos.length;

/* Quantas casas vão aparecer na vitrine */
const quantidade_exposta = getComputedStyle(document.documentElement).getPropertyValue('--quantidade_exposta').trim();

/* Tempo que o carrossel demora para trocar a casa */
const velocidade = getComputedStyle(document.documentElement).getPropertyValue('--tempo_carrossel');

/* Quantas casas vão ser puladas por giro */
const valorCss = +getComputedStyle(document.documentElement).getPropertyValue('--casas_por_giro');
const casa_por_giro = valorCss > quantidade_exposta ? quantidade_exposta : valorCss;

let progresso_carrossel = blocos.length;

function carrossel() {
    // Pega o valor de translateX do trilho
    const matrix = new DOMMatrixReadOnly(styles_trilho.transform);
    let translateX = +matrix.m41;

    // Atualiza o progresso do carrossel, subtraindo as casas percorridas
    progresso_carrossel -= casa_por_giro;

    // Se não houver mais casas para percorrer, reinicia o carrossel
    if (progresso_carrossel <= 0) {
        progresso_carrossel = blocos.length;
        translateX = 0;
    }

    // Se o número de casas restantes for menor que o valor de casas por giro,
    // desacelera o carrossel proporcionalmente ao tamanho dos blocos
    else if (progresso_carrossel <= quantidade_exposta) {
        if (quantidade_exposta > casa_por_giro) progresso_carrossel = quantidade_exposta - casa_por_giro;
        translateX -= tamanho_bloco * progresso_carrossel;
    }

    // Caso contrário, continua normalmente com o deslocamento padrão
    else translateX -= tamanho_bloco * casa_por_giro;

    // Aplica a nova posição ao trilho
    trilho.style.setProperty('transform', `translateX(${translateX}px)`);

    console.log("progresso: " + progresso_carrossel);
    console.log("casa por giro: " + casa_por_giro);
    console.log("quantidade exposta: " + quantidade_exposta);
};

setInterval(() => { carrossel() }, velocidade * 1000);