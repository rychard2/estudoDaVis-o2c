// Controle do tamanho inicial da fonte
let tamanhoAtualFonte = 100;

// Função para ativar e desativar Alto Contraste
function alternarContraste() {
    document.body.classList.toggle("alto-contraste");

    const btnContraste = document.getElementById("btn-contraste");
    const ativo = document.body.classList.contains("alto-contraste");

    if (btnContraste) {
        btnContraste.setAttribute("aria-pressed", ativo);
    }
}

// Função para aumentar o texto (A+)
function aumentarTexto() {
    if (tamanhoAtualFonte < 150) {
        tamanhoAtualFonte += 10;
        document.documentElement.style.fontSize = `${tamanhoAtualFonte}%`;
    }
}

// Função para diminuir o texto (A-)
function diminuirTexto() {
    if (tamanhoAtualFonte > 90) {
        tamanhoAtualFonte -= 10;
        document.documentElement.style.fontSize = `${tamanhoAtualFonte}%`;
    }
}