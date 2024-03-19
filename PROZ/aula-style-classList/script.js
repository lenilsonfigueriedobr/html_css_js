const h2 = document.querySelector("h2")
h2.style.color = "red"
h2.style.fontSize = "60px" //propriedade do CSS: font-size

const button = document.querySelector("button")
button.style.color = "red"

// --------------------------

const username = document.querySelector("#login-usuario")
const errorText = document.querySelectorAll(".error-text")
const password = document.querySelector("#login-senha")

// o usuário digitou um nome inválido
function mostrarErroUsername(){
    username.classList.add("error")
    errorText[0].classList.add("visible")
}

// 0 usuário corrigiu o nome, mas digitou uma senha inválida
function mostrarSucessoUsername(){
    username.classList.remove("error")
    errorText[0].classList.remove("visible")
    username.classList.add("correct")
}

// o usuário digitou um senha inválido
function mostrarErroSenha(){
    password.classList.add("error")
    errorText[1].classList.add("visible")
}

// o usuário digitou a senha correta
function mostrarSucessoSenha(){
    password.classList.remove("error")
    errorText[1].classList.remove("visible")
    password.classList.add("correct")
}

mostrarErroUsername()
mostrarSucessoUsername()
mostrarErroSenha()
mostrarSucessoSenha()