const funcCallback = function(){
    return 30 + 3;
}

function receber(callback){
    callback()
}

receber(funcCallback)