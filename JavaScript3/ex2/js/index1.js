function receber (){
    let numeros = {}
    numeros.n1 = document.getElementById("n1").value
    numeros.n2 = document.getElementById("n2").value
    return numeros
}

function somar (){
    numeros = receber()
    let soma = parseInt(numeros.n1) + parseInt(numeros.n2) 
    printar(soma)
}

function subtrair (){
    numeros = receber()
    let sub = numeros.n1 - numeros.n2
   printar(sub)
}

function multiplicar (){
    numeros = receber()
    let mul = numeros.n1 * numeros.n2
    printar(mul)   
}

function dividir (){
    numeros = receber()
    let div = numeros.n1 / numeros.n2
    printar(div) 
}

function printar (resultado){
    let receber = document.getElementById("resultado").value=resultado
}

