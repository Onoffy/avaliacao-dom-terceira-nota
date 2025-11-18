let email = document.getElementById('email');
let senha = document.getElementById('senha');
let result = document.getElementById('result');

function mostrarResultado() {
    const valorEmail = email.value;

    const validarEmail = (valorEmail) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(valorEmail);
    };

    let email_valido = validarEmail(valorEmail);

    if (email_valido && valorEmail.length >= 10) {
        result.style.color = '#70e000';
        result.style.marginTop = '0.5em';
        result.innerHTML = "E-MAIL VÁLIDO!";
    } else {
        result.style.color = '#c1121f';
        result.style.marginTop = '0.5em';
        result.innerHTML = "E-MAIL INVÁLIDO!";
    }
}