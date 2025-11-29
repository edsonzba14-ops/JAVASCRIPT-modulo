function atualizarRelogio() {
    const relogio = document.getElementById('relogio');

    const agora = new Date();

    var h = agora.getHours().toString().padStart(2, '0');
    var m = agora.getMinutes().toString().padStart(2, '0');
    var s = agora.getSeconds().toString().padStart(2, '0');

    relogio.innerHTML = h + ":" + m + ":" + s;
}

setInterval(atualizarRelogio, 1000);

atualizarRelogio();
