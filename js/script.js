var alfa = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function escolherOpcao() {
    tipoCriptografia = document.querySelector('#tipoCriptografia').value;
    console.log(tipoCriptografia);
    if (tipoCriptografia == 'caesar') {
        document.querySelector('.chavecodificacao').style.display = 'inline-block';
    } else {
        document.querySelector('.chavecodificacao').style.display = 'none';
    }
}

function mudarOpcao() {
    var arrayRadio = document.getElementsByName('opcoes');
    for (i = 0; i < arrayRadio.length; i++) {
        if (arrayRadio[i].checked) {
            console.log(arrayRadio[i]);
            document.querySelector('#botao').value = arrayRadio[i].value[0].toUpperCase() + arrayRadio[i].value.substr(1) + " a mensagem!";
            direcao = arrayRadio[i].value;
        }
    }
}

function codificaDecodifica() {
    tipoCriptografia = document.querySelector('#tipoCriptografia').value;
    textoCaixaMensagem = document.querySelector('#caixamensagem').value;
    console.log(tipoCriptografia);
    console.log(direcao);
    console.log(textoCaixaMensagem);
    document.querySelector('#caixaresultado').value = "";
    if (tipoCriptografia == "caesar") {
        for (i = 0; i < textoCaixaMensagem.length; i++) {
            console.log(textoCaixaMensagem[i]);
            indicePosicao = alfa.indexOf(textoCaixaMensagem[i]);
            console.log(indicePosicao);
            if (direcao == 'codificar') {
                chaveCodificacao = indicePosicao + parseInt(document.querySelector('#chavecodificacao').value);
                if (chaveCodificacao > 25) {
                    chaveCodificacao = chaveCodificacao - 26;
                }
            }
            if (direcao == 'decodificar') {
                chaveCodificacao = indicePosicao - parseInt(document.querySelector('#chavecodificacao').value);
                if (chaveCodificacao < 0) {
                    chaveCodificacao = chaveCodificacao + 26;
                }
            }
            document.querySelector('#caixaresultado').value = document.querySelector('#caixaresultado').value + alfa[chaveCodificacao];
        }
    }
    if (tipoCriptografia == "base64") {
        if (direcao == 'codificar') {
            document.querySelector('#caixaresultado').value = btoa(document.querySelector('#caixamensagem').value);
        }
        if (direcao == 'decodificar') {
            document.querySelector('#caixaresultado').value = atob(document.querySelector('#caixamensagem').value);
        }
    }
}