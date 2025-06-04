## 🎠 Projeto de Dois Carrosséis em HTML, CSS e JS

Este projeto é uma brincadeira feita por mim, para testar e praticar carrosséis em uma página web. A ideia foi criar dois tipos diferentes de carrosséis com comportamento automático e responsivo, utilizando apenas HTML, CSS e JavaScript puro. Sem pesquisas na internet, o codigo é 100% meu.

# 🚀 Demonstração

funcionamento:

- Carrossel de Comentários (Manual + Automático)
- Carrossel Horizontal de Blocos (Automático e Responsivo)

https://encryptkalean.github.io/Brincando-com-Carrosseis/

💡 Este projeto não utiliza bibliotecas externas como jQuery ou frameworks — é tudo na mão, só com Vanilla JS.

# 🧠 Como Funciona

1. Carrossel de Comentários
- Mostra depoimentos fictícios.
- Botões de navegação prev e prox.
- Alterna automaticamente a cada 5 segundos.
- Reinicia o temporizador quando o usuário interage.

2. Carrossel Horizontal de Blocos
- Exibe uma "vitrine" com blocos numerados.
- Os blocos rolam horizontalmente automaticamente a cada 3 segundos.
- Usa :root e media queries para alterar a quantidade de blocos visíveis com base na largura da tela.
- Imagens de fundo usam o placeholder https://placehold.co/200x250.

# 📱 Responsividade

Utiliza media queries para ajustar a quantidade de blocos expostos no segundo carrossel:

| Largura da Tela | Blocos Expostos |
| --------------- | --------------- |
| > 1100px        | 5               |
| <= 1100px       | 3               |
| <= 800px        | 2               |
| <= 400px        | 1               |

# ⚙️ Tecnologias Utilizadas

- HTML5
- CSS3 (Flexbox, media queries, variáveis CSS)
- JavaScript (DOM, setInterval, lógica de controle)

# 🎯 Objetivos do Projeto

- Praticar manipulação de DOM e estilos dinâmicos.
- Testar lógica de carrosséis com rotação automática.
- Criar um layout visualmente funcional e divertido.

# ✍️ Autor
Desenvolvido com curiosidade e diversão por Kauan Leandro.
