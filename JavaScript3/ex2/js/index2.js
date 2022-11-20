// function alerta() {
//     let nome = prompt("Qual é o seu nome?")
//     let texto = "  <h2> Seja bem vindo " + nome + "</h2>"
//     document.getElementById("nome").innerHTML = texto
//     return 0
// }

// function adicionar() {
//     let lorem = "<p id= 'paragrafo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam totam fuga neque voluptas veritatis omnis et tempore consequuntur hic fugit aliquam, tenetur quos accusamus laudantium nihil, enim voluptate ex obcaecati quae earum eius itaque. Laudantium, odio!</p>"
//     document.getElementById("texto2").innerHTML += lorem
// }

// function remover() {
//     let nome = document.getElementById("texto2").remove()
//     let contador
//     contador++
//     if (contador != 1) {
//         let texto = "<p id='texto2' ></p>"
//         document.getElementById("quatro").innerHTML = texto
//     }
// }

$(function alerta() {
    let nome = prompt("Qual é o seu nome?")
    let texto = "  <h2> Seja bem vindo " + nome + "</h2>"
    document.getElementById("nome").innerHTML = texto
    return 0
})

$("#adicionar").click(function adicionar(){
    $("#texto2").append("<p id= 'paragrafo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam totam fuga neque voluptas veritatis omnis et tempore consequuntur hic fugit aliquam, tenetur quos accusamus laudantium nihil, enim voluptate ex obcaecati quae earum eius itaque. Laudantium, odio!</p>");
});


$("#remover").click(function remover() {
    $("p").empty()
})