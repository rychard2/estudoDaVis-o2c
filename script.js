let tamanhoAtualFonte = 100;

// Função para ativar/desativar Alto Contraste
function alternarContraste() {
    document.body.classList.toggle("alto-contraste");
    
    const btnContraste = document.getElementById("btn-contraste");
    const ativo = document.body.classList.contains("alto-contraste");
    
    if (btnContraste) {
        btnContraste.setAttribute("aria-pressed", ativo);
    }
}

// Função para Aumentar o Texto (A+)
function aumentarTexto() {
    if (tamanhoAtualFonte < 150) {
        tamanhoAtualFonte += 10;
        document.documentElement.style.fontSize = `${tamanhoAtualFonte}%`;
    }
}

// Função para Diminuir o Texto (A-)
function diminuirTexto() {
    if (tamanhoAtualFonte > 90) {
        tamanhoAtualFonte -= 10;
        document.documentElement.style.fontSize = `${tamanhoAtualFonte}%`;
    }
}