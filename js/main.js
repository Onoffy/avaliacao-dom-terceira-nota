let email = document.getElementById('email');
let senha = document.getElementById('senha');
let result = document.getElementById('result');

function validarEmail() {
    if (email.value != "" && email.value.length >= 10 && email.value.includes("@") && email.value.includes(".")) {
        result.style.color = '#70e000';
        result.innerHTML = "LOGIN EFETUADO";
    }else {
        result.style.color = 'red';
        result.innerHTML = "LOGIN FRACASSADO";
    }
}