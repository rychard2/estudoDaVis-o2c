//Botões de acessibilidade
document.addEventListener("DOMContentLoaded,()=>{
    
 const btnContraste = document.getElementById("btn-contraste");  
 const btnAumentar = docunent.getElementById("btn-aumentar-texto");
 const btnDiminuir = document.getElementById("btn-diminuir-texto");

 //aumenta a fonte

 let tamanhoAtualFonte = 100;

 //função alto contraste

 btnContraste.addEventListener("click , () =>{"

docunent.bdy.classList.toogle("alto-contraste");

//acessibilidade para leitores de tela 

const ativo = document.body.classList.contains("alto-contraste");
btnContraste.setAttrbute("aria-pressed , ativo");
    
 )};

//função aumentar o texto

btnAumentar.addEventListener("click", ()=>{
    if (tamanhoAtualFonte < 150){
        tamanhoAtualFonte += 10;
        document.documentElement.style.fontSize = `${tamanhoAtualFonte}%`;
      }
});

//função diminuir texto;

btnDiminuir.addEventListener("click", ()=> {
    if (tamanhoAtualFonte > 90){
        tamanhoAtualFonte -= 10;
        document.documentElement.style.fontSize = `${tamanhoAtualFonte}%`;
    }
});
});