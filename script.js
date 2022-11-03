

function atualizarACadaSegundo() {
    var display = document.querySelector('.display')
    var data = new Date();
    var mostarHorario = corrigirHorario(data.getHours()) + ':' + corrigirHorario(data.getMinutes()) + ':' + corrigirHorario(data.getSeconds());

    display.textContent = mostarHorario;

}

function corrigirHorario(numero){
    if (numero < 10){
        numero = '0' + numero;
    }
    return numero;
}

function mostarData(){
    var display = document.querySelector('footer')
    var data = new Date();
    var diaMesAno = data.getDay + '/' + data.getMonth + '/' + data.getFullYear;

    display.textContent = diaMesAno;
}

atualizarACadaSegundo();
setInterval(atualizarACadaSegundo, 1000);