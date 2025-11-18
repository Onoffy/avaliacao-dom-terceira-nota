let email = document.getElementById('email');
let senha = document.getElementById('senha');
let success = document.getElementById('success');
let error = document.getElementById('error_message');

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
        success.style.marginTop = '0.4em';
        success.innerHTML = "LOGIN EFETUADO!";
        error.innerHTML = "";
        error.style.marginTop = '0';
    } else if (email_valido) {
        error.style.marginTop = '0.3em';
        error.innerHTML = "PREENCHA SUA SENHA!";
        success.innerHTML = "";
        success.style.marginTop = '0';
    } else if (senha_valida) {
        error.style.marginTop = '0.3em';
        error.innerHTML = "PREENCHA SEU E-MAIL!";
        success.innerHTML = "";
        success.style.marginTop = '0';
    } else if (senha_valida && valorSenha.length < 6) {
        error.style.marginTop = '0.3em';
        error.innerHTML = "SUA SENHA PRECISA TER AO MENOS 6 CARACTERES!";
        success.innerHTML = "";
        success.style.marginTop = '0';
    } else {
        error.style.marginTop = '0.3em';
        error.innerHTML = "E-MAIL INVÁLIDO!";
        success.innerHTML = "";
        success.style.marginTop = '0';
    }
}