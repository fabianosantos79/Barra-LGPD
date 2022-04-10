window.onload = function(){
    if(localStorage.getItem('lgpd')){
        barra_lgpd.style.display = "none";
    }
}

const botao = document.querySelector('#botaoLGPD');
botao.addEventListener('click', clicouLGPD);

const barra_lgpd = document.querySelector('.barra_lgpd');

function clicouLGPD(){
    const lgpdSave = localStorage.setItem('lgpd', '12345');
    barra_lgpd.style.display = "none";
} 