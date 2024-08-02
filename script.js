function mostrar() {
    //1
    var altura = document.getElementById('altura').value;
    var peso = document.getElementById('peso').value;
    var nome = document.getElementById('nome').value;
    //calculo 1 do imc
    var imc = peso / (altura * altura)
    //condicionais
    var g = document.querySelectorAll('input[type="radio"]');
    if (g[0].checked) {
        if (imc < 20.7) {
            document.getElementById(`resultado`).innerHTML = ` ${nome}, seu IMC é ${imc} <br> você está abaixo do peso! `;
        } else if (imc < 26.4) {
            document.getElementById(`resultado`).innerHTML = ` ${nome}, seu IMC é ${imc} <br> você está no peso normal `;
        } else if (imc < 27.8) {
            document.getElementById(`resultado`).innerHTML = ` ${nome}, seu IMC é ${imc} <br> você está marginalmente acima do peso `;
        } else if (imc < 31.1) {
            document.getElementById(`resultado`).innerHTML = ` ${nome}, seu IMC é ${imc}  <br> você está acima do peso `;
        }
        else {
            document.getElementById(`resultado`).innerHTML = ` ${nome}, seu IMC é ${imc}  <br> você está obeso `;
        }

    } else if (g[1].checked) {
        if (imc < 19.1) {
            document.getElementById(`resultado`).innerHTML = ` ${nome}, seu IMC é ${imc} <br> você está abaixo do peso! `;
        } else if (imc < 25.8) {
            document.getElementById(`resultado`).innerHTML = ` ${nome}, seu IMC é ${imc} <br> você está no peso normal `;
        } else if (imc < 27.3) {
            document.getElementById(`resultado`).innerHTML = ` ${nome}, seu IMC é ${imc} <br> você está marginalmente acima do peso `;
        } else if (imc < 32.3) {
            document.getElementById(`resultado`).innerHTML = ` ${nome}, seu IMC é ${imc}  <br> você está acima do peso `;
        }
        else {
            document.getElementById(`resultado`).innerHTML = ` ${nome}, seu IMC é ${imc} <br> você está obeso `;
        }

    }

}