// Aula 21 - Prática Guiada 1:

// abra o projeto abaixo
// crie um arquivo .js
// conecte esse arquivo ao html do projeto
// crie uma variável para manipular a logo da página
// crie outra variável para manipular os elementos com a classe "post-autor"

// Desafio: crie novas variáveis para manipular os seguintes elementos:

// post 02
// formulario
// section com ambos os posts
// datas dos posts
// textos dos posts
// listas com links das redes sociais

// const logo = document.getElementById ("logo");
// // console.log (logo)

// const autores = document.getElementsByClassName ("post-autor");
// // console.log (autores)

// const segundoPost = document.querySelector("article")
// console.log (segundoPost)

// Aula 21 - Prática Guiada 2: Crie variáveis adicionais para manipular os seguintes elementos:

// parágrafo contendo o texto do segundo post
// lista de redes dentro do footer

// Desafio: crie variáveis para manipular os seguintes elementos:

// O link dentro do texto do primeiro post
// A palavra em negrito dentro do texto do segundo post
// O input de nome do formulário
// Os links da lista de redes no final da página
// Os links da navegação (só os links, não os elementos de lista)
// Os 4 "Autor:" e "Data:" em negrito nos dois posts'

// const segundoPost = document.querySelector("#post02 .post-texto")
// console.log (segundoPost.innerText)

// const listaRede = document.querySelector(".lista_redes")
// console.log (listaRede.innerText)

// const primeiroPost = document.querySelector("#post01 a")
// console.log (primeiroPost.innerText)

// const segundoPost = document.querySelector("#post02 strong")
// console.log (segundoPost)

/*Aula 21 - Prática Guiada 3: Crie uma função que receba um NodeList e imprima no console a propriedade innerText de cada elemento

Desafio: Como parte da execução da função, adicione uma frase que informe a quantidade de elementos da lista*/

const listaRede = document.querySelectorAll(".lista_redes")

function mostrarConteudoElementos(elementos) {
    for (let i = 0; i < elementos.length; i++) {
        console.log(elementos[i].innerText);
    }
}

mostrarConteudoElementos(listaRede);