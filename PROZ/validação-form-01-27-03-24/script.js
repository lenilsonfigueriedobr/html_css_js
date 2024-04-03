// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

// Mostrar popup de campo obrigatório
function mostrarPopup(){
    usernameLabel.classList.add("required-popup")
}

usernameInput.addEventListener("focus", mostrarPopup)

// Ocultar popup de campo obrigatório
function ocultarPopup(){
    usernameLabel.classList.remove("required-popup")
}
usernameInput.addEventListener("blur", ocultarPopup)

// Validar valor do input

function validarUsername(evento){
    const valor = evento.target.value;
    console.log(valor);
    //console.log(usernameInput.value)

    if (valor.length < 3){
        console.log("valor inválido");
        usernameInput.classList.remove("correct");
        usernameInput.classList.add("error");
        usernameHelper.innerText="Campo obrigatório";
        usernameHelper.classList.add("visible");
    } else {
        console.log("valor válido");
        usernameInput.classList.add("correct");
        usernameInput.classList.remove("error");
        usernameHelper.classList.remove("visible");
    }
}

usernameInput.addEventListener("change", validarUsername);