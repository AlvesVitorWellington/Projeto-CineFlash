//querySelector retorna o 1º elemento de acordo com o parametro, nesse caso retorna o elemento do botao comprar. 
var botao = document.querySelector('body form#formulario button');


botao.onclick = function abrirNovaGuia() {
    //metodo responsavel por abrir uma nova guia de acordo com os parametros.
    //nesse caso so estou pedindo que ele abra essa URL e como n especifiquei o segundo paramentro ja vai o _blank.
    window.open('index.html');
    window.close();
};

//querySelector retorna o primeiro elemento dentro do body e do input.
//focus da foco ao campo retornado anteriormente.
document.querySelector('body input[name=nome]').focus();