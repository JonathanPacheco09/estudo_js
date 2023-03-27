function somar(N , T){
   return N + T
}

function multiplicacao(M , P){
    return M * P    
}

function divisao(D , V){
    return D / V
}

function subitracao(S , B){
    return S - B 
}
function main(x , y){
    var t = subitracao(x ,y)
    var s = somar(x , y)
    var m = multiplicacao(x , y)
    var d = divisao(x , y)
    return console.log(`divisao ${d}  multiplicacao ${m}  soma ${s} subitracao ${t}`)
}
main(2 , 5)
