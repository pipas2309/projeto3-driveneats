// Valores

function precoSite() {
    let item = document.querySelector(".preco-item");
    let valor = document.querySelector(".preco-item p").innerHTML;
    const precificacao = function(preco){
        return new Intl.NumberFormat('pt-br', {style: 'currency',currency: 'BRL', minimumFractionDigits: 2}).format(preco);
        };
    document.querySelector(".preco-item p").innerHTML = precificacao(valor);
    item.classList.add("preco-real");
    item.classList.remove("preco-item");

    if(item) {
        precoSite()
    }
}
precoSite()

