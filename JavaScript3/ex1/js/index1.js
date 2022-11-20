// let [body] = document.getElementsByTagName("body")
// let lampada = document.getElementById("lampada")

// lampada.onmouseover = () => {
//     body.style.color = "black"
//     body.style.backgroundColor = "white"
//     lampada.src = "./lampada-acesa.png"
// }

// lampada.onmouseleave = () => {
//     body.style.color = "white"
//     body.style.backgroundColor = "black"
//     lampada.src = "./lampada.png"
// }

let [body] = document.getElementsByTagName("body")
let lampada = document.getElementById("lampada")

$(lampada).mouseover(function () { 
    body.style.color = "black"
    body.style.backgroundColor = "white"
    lampada.src = "./lampada-acesa.png"
});

$(lampada).mouseleave(function () { 
    body.style.color = "white"
    body.style.backgroundColor = "black"
    lampada.src = "./lampada.png"
});