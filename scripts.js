// Valores em R$ - pt-br (testando a funcionalidade da função)
precoSite();
function precoSite() {
    const item = document.querySelector(".preco-item");
    const valor = document.querySelector(".preco-item p").innerHTML;
    const precificacao = function(preco){
        return new Intl.NumberFormat('pt-br', {style: 'currency',currency: 'BRL', minimumFractionDigits: 2}).format(preco);
        };
    document.querySelector(".preco-item p").innerHTML = precificacao(valor);
    item.classList.add("preco-real");
    item.classList.remove("preco-item");

    if(document.querySelector(".preco-item") !== null) {
        precoSite();
    }
}

// Seleção de elementos
function selecionar (elemento) {
    
    const tipoDoItem = elemento.parentElement.parentElement;

    if(tipoDoItem.classList.contains("comida")) {

        const previamenteSelecionado = document.querySelector(".comida").querySelector(".borda");
        
        if (previamenteSelecionado !== null && previamenteSelecionado !== elemento) {
            previamenteSelecionado.classList.remove("borda");
            previamenteSelecionado.querySelector(".selecao-item").classList.add("escondido");
        } 

        elemento.classList.toggle("borda");
        elemento.querySelector(".selecao-item").classList.toggle("escondido");

    }

    if(tipoDoItem.classList.contains("bebida")) {

        const previamenteSelecionado = document.querySelector(".bebida").querySelector(".borda");
        
        if (previamenteSelecionado !== null && previamenteSelecionado !== elemento) {
            previamenteSelecionado.classList.remove("borda");
            previamenteSelecionado.querySelector(".selecao-item").classList.add("escondido");
        } 

        elemento.classList.toggle("borda");
        elemento.querySelector(".selecao-item").classList.toggle("escondido");

    }

    if(tipoDoItem.classList.contains("sobremesa")) {

        const previamenteSelecionado = document.querySelector(".sobremesa").querySelector(".borda");
        
        if (previamenteSelecionado !== null && previamenteSelecionado !== elemento) {
            previamenteSelecionado.classList.remove("borda");
            previamenteSelecionado.querySelector(".selecao-item").classList.add("escondido");
        } 

        elemento.classList.toggle("borda");
        elemento.querySelector(".selecao-item").classList.toggle("escondido");

    }

    return comprar();
}

// Botão de fechar pedido
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

// Tela de fechar pedido
function fecharPedido () {
    
    if (comprar() === 3) {
        document.querySelector(".finalizar-compra").classList.remove("escondido");
        document.querySelector(".fundo-branco").classList.remove("escondido");
        return listaSelecionada();
    }
    
}

// Itens no fechar pedido
function listaSelecionada () {

    const comidaNome = document.querySelector(".comida").querySelector(".borda").querySelector("h3").innerHTML;
    const comidaPreco = document.querySelector(".comida").querySelector(".borda").querySelector(".preco-real").innerText;

    const bebidaNome = document.querySelector(".bebida").querySelector(".borda").querySelector("h3").innerHTML;
    const bebidaPreco = document.querySelector(".bebida").querySelector(".borda").querySelector(".preco-real").innerText;

    const sobremesaNome = document.querySelector(".sobremesa").querySelector(".borda").querySelector("h3").innerHTML;
    const sobremesaPreco = document.querySelector(".sobremesa").querySelector(".borda").querySelector(".preco-real").innerText;

    document.querySelector(".comida-escolhida").innerHTML = `<p>${comidaNome}</p> <p>${comidaPreco}</p>`;
    document.querySelector(".bebida-escolhida").innerHTML = `<p>${bebidaNome}</p> <p>${bebidaPreco}</p>`;
    document.querySelector(".sobremesa-escolhida").innerHTML = `<p>${sobremesaNome}</p> <p>${sobremesaPreco}</p>`;

    let precoTotal = Number(comidaPreco.replace("R$", "").replace(",", ".")) + Number(bebidaPreco.replace("R$", "").replace(",", ".")) + Number(sobremesaPreco.replace("R$", "").replace(",", "."));
    
    const precificacaoFinal = function(precoFinal){
        return new Intl.NumberFormat('pt-br', {style: 'currency',currency: 'BRL', minimumFractionDigits: 2}).format(precoFinal);
        };

    document.querySelector(".total-confirmacao").innerHTML = `<p>TOTAL</p><p>${precificacaoFinal(precoTotal)}</p>`;

}

// Confirmar pedido 
function confirmar() {

    let seuNome = prompt("Boa noite! Por favor, qual seu nome?");
    if(seuNome === "" || seuNome === null) {
        return alert("Desculpe, não servimos comida para aquele que não deve ser nomeado");
    }

    let seuEndereco = prompt("Para terminar seu pedido, qual seu endereço?");
    if(seuEndereco === "" || seuEndereco === null) {
        return alert("Infelizmente não foi possível concatenar duas classes: Motoboy e Vidente");
    }

    let mensagem = "";

    if(seuNome === "Pepsi") {

        mensagem = `Olá, gostaria de fazer o pedido:
- Prato: ${document.querySelector(".comida-escolhida").firstElementChild.innerHTML}
- Bebida: ${document.querySelector(".bebida-escolhida").firstElementChild.innerHTML}
- Sobremesa: ${document.querySelector(".sobremesa-escolhida").firstElementChild.innerHTML} 
Total: ${document.querySelector(".total-confirmacao").lastElementChild.innerText}
        
Nome: ${seuNome}
Endereço: ${seuEndereco}
        
*Grátis, uma coquinha gelada!`;

    } else {

    mensagem = `Olá, gostaria de fazer o pedido:
- Prato: ${document.querySelector(".comida-escolhida").firstElementChild.innerHTML}
- Bebida: ${document.querySelector(".bebida-escolhida").firstElementChild.innerHTML}
- Sobremesa: ${document.querySelector(".sobremesa-escolhida").firstElementChild.innerHTML} 
Total: ${document.querySelector(".total-confirmacao").lastElementChild.innerText}

Nome: ${seuNome}
Endereço: ${seuEndereco}`;
    }
  
    let uri = `https://wa.me/5511944889740?text=${encodeURIComponent(mensagem)}`;
    window.open(uri);

    return tudoCerto();
}

// Cancelar pedido
function cancelar() {
    document.querySelector(".finalizar-compra").classList.add("escondido");
    document.querySelector(".fundo-branco").classList.add("escondido");
}

// Após confirmar o pedido 
function tudoCerto() {
    document.querySelector(".finalizar-compra").classList.add("escondido");
    document.querySelector(".pedido-feito").classList.remove("escondido");
    document.querySelector(".pedido-feito").classList.add("display-flex");
}

// Ainda tem fome?
function maisFome() {
    document.querySelector(".pedido-feito").classList.add("escondido");
    document.querySelector(".fundo-branco").classList.add("escondido");
    document.querySelector(".pedido-feito").classList.remove("display-flex");
}
