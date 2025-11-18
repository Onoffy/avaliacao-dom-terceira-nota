let email = document.getElementById('email');
let senha = document.getElementById('senha');
let result = document.getElementById('success');

function mostrarResultado() {
    const valorEmail = email.value;
    const valorSenha = senha.value;

    const validarEmail = (valorEmail) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(valorEmail);
    }

    const validarSenha = (valorSenha) => {
        const regexSenha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])(?:([0-9a-zA-Z$*&@#])(?!\1)){6,}$/;
        return regexSenha.test(valorSenha);
    }

    let email_valido = validarEmail(valorEmail);
    let senha_valida = validarSenha(valorSenha);

    if ((email_valido && senha_valida) && (valorEmail.length >= 10)) {
        result.innerHTML = "LOGIN EFETUADO!";
        result.style.color = '#70e000';
        result.style.fontSize = '1.2em';
        result.style.padding = '0';
    } else if (valorEmail === "" || valorSenha === "") {
        result.innerHTML = "PREENCHA TODOS OS CAMPOS!";
        result.style.color = '#c1121f';
        result.style.fontSize = '1.2em';
        result.style.padding = '0';
    } else if (senha_valida === false) {
        result.innerHTML = "SUA SENHA DEVE TER NO MÍNIMO 6 CARACTERES E INCLUIR PELO MENOS UMA LETRA MAIÚSCULA(A-Z), UMA MINÚSCULA(a-z), UM NÚMERO(0-9) E UM CARACTERE ESPECIAL($*&@#)!";
        result.style.color = '#6c757d';
        result.style.fontSize = '0.5em';
    } else {
        result.innerHTML = "E-MAIL INVÁLIDO!";
        result.style.color = '#c1121f';
        result.style.fontSize = '1.2em';
        result.style.padding = '0';
    }
}

function mostrarSenha() {
    if (senha.type === "password") {
        senha.type = "text";
    } else {
        senha.type = "password";
    }
}