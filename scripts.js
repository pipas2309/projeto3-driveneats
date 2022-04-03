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

function selecionar (elemento) {
    
    const tipoDoItem = elemento.parentElement.parentElement;

    if(tipoDoItem.classList.contains("comida")) {

        const previamenteSelecionado = document.querySelector(".comida").lastElementChild.querySelector(".borda");
        
        if (previamenteSelecionado !== null && previamenteSelecionado !== elemento) {
            previamenteSelecionado.classList.remove("borda");
            previamenteSelecionado.querySelector(".selecao-item").classList.add("escondido");
        } 

        elemento.classList.toggle("borda");
        elemento.querySelector(".selecao-item").classList.toggle("escondido")

    }

    if(tipoDoItem.classList.contains("bebida")) {

        const previamenteSelecionado = document.querySelector(".bebida").lastElementChild.querySelector(".borda");
        
        if (previamenteSelecionado !== null && previamenteSelecionado !== elemento) {
            previamenteSelecionado.classList.remove("borda");
            previamenteSelecionado.querySelector(".selecao-item").classList.add("escondido");
        } 

        elemento.classList.toggle("borda");
        elemento.querySelector(".selecao-item").classList.toggle("escondido")

    }

    if(tipoDoItem.classList.contains("sobremesa")) {

        const previamenteSelecionado = document.querySelector(".sobremesa").lastElementChild.querySelector(".borda");
        
        if (previamenteSelecionado !== null && previamenteSelecionado !== elemento) {
            previamenteSelecionado.classList.remove("borda");
            previamenteSelecionado.querySelector(".selecao-item").classList.add("escondido");
        } 

        elemento.classList.toggle("borda");
        elemento.querySelector(".selecao-item").classList.toggle("escondido")

    }

    return comprar();
}

function comprar() {
    const numero = document.querySelectorAll(".borda").length;
    const botao = document.querySelector(".botao-rodape");

    if (numero === 0) {
        botao.innerHTML = "<p>Selecione os 3 itens para fechar o pedido</p>";
        botao.classList.remove("fundo-verde");
        botao.classList.remove("cursor");
    }

    if (numero === 1) {
        botao.innerHTML = "<p>Selecione os outros 2 itens para terminar</p>";
        botao.classList.remove("fundo-verde");
        botao.classList.remove("cursor");
    }

    if (numero === 2) {
        botao.innerHTML = "<p>Escolha o último item para fechar o pedido</p>";
        botao.classList.remove("fundo-verde");
        botao.classList.remove("cursor");
    }

    if (numero === 3) {
        botao.innerHTML = "<p>Fechar pedido</p>";
        botao.classList.add("fundo-verde");
        botao.classList.add("cursor");
    }

    return numero;
}

function fecharPedido () {
    
    if (comprar() === 3) {
        document.querySelector(".finalizar-compra").classList.remove("escondido")
        document.querySelector(".fundo-branco").classList.remove("escondido")
    }
}