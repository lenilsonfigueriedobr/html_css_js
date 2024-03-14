const arrayPostagens = [
  {
    titulo: "Comida Mineira",
    subtitulo: "Melhor sabor do mundo!!!",
    data: "13/03/2024",
    texto: "Especializado em avaliar gastronomias ao redor do mundo, o site TasteAtlas elegeu a comida feita em Minas Gerais, conhecida por seus sabores autênticos e ricos, como a melhor culinária regional do Brasil e uma das 30 melhores do mundo. O ranking é baseado na opinião da audiência que acompanha o site, fundado por um jornalista croata, e inclui uma lista dos 50 melhores produtos em diversas categorias. '<a href='https://soubh.uai.com.br/noticias/gastronomia/comida-mineira-e-eleita-a-melhor-regional-do-brasil-segundo-ranking-do-tasteatlas'>Fonte</a>' "
  },
  {
    titulo: "Pop Vegan",
    subtitulo: "Comida vegana para todos!",
    data: "06/07/2022",
    texto: "Restaurante em Consolação com comida por kilo no almoço e rodízio de pizzas à noite, tudo 100% vegano. Vale muito a pena conhecer :)"
  },
  {
    titulo: "Make Hommus. Not War",
    subtitulo: "Só delivery, para curtir em casa!",
    data: "18/08/2022",
    texto: "Neste restaurante não só pode, como é encorajado comer o antepasto como prato principal. Recomendamos os kibes e a kafta bonina."
  },
  {
    titulo: "Churrascada do Mar",
    subtitulo: "Melhor do que estar na praia!",
    data: "30/08/2022",
    texto: "Todos conhecemos e amamos um bom churrasco, mas o que você acha de experimentar um churrasco focado em frutos do mar? Nós gostamos, experimente e nos conte o que você achou!"
  },
];

//adicionar o elemento á pagina
const main = document.querySelector("main")

for (let i = 0; i< arrayPostagens.length; i++){
  
    //criar elemento HTML
    const article = document.createElement("article");

    //inserindo conteudo
    article.innerHTML = `
    <h3> ${arrayPostagens[i].titulo}</h3>
    <p class="subtitulo">${arrayPostagens[i].subtitulo}</p>
    <div class="data">${arrayPostagens[i].data}</div>
    <p>${arrayPostagens[i].texto}</p>
  `;
  //adicionar o elemento á pagina
  // const main = document.querySelector("main")
  main.appendChild(article)
}