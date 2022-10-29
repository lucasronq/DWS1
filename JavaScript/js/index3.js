let coratual = 'white'
function mudar(){
    let corpo = document.getElementById("corpo")
    corpo.style.backgroundColor = coratual
}


function vermelho(){
    let corpo = document.getElementById("corpo")
    corpo.style.backgroundColor = 'red'
    onclick=function () {
        coratual = "red"
    }
        }
function verde(){
    let corpo = document.getElementById("corpo")
    corpo.style.backgroundColor = 'green'
    
    onclick=function() {
        coratual = "green"
    }
}
function azul(){
    let corpo = document.getElementById("corpo")
    corpo.style.backgroundColor = 'blue'
    
    onclick=function() {
        coratual = "blue"
    }
}
function amarelo(){
    let corpo = document.getElementById("corpo")
    corpo.style.backgroundColor = 'yellow'
    
    onclick=function() {
        coratual = "yellow"
    }
}
function rosa(){
    let corpo = document.getElementById("corpo")
    corpo.style.backgroundColor = 'rgb(223, 18, 206)'
    
    onclick=function() {
        coratual = "rgb(223, 18, 206)"
    }
}

function resetar (){
    let corpo = document.getElementById("corpo")
    corpo.style.backgroundColor = 'white'

    onclick=function() {
        coratual='white'
    }
}