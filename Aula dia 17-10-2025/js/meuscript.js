function exibir(){
    let paragrafo = document.getElementById("nome");
    console.log(paragrafo);
    paragrafo.innerHTML = "Primeira Ação!"
}
function ocultar(){
    document.getElementById("nome").innerHTML = "";    
}