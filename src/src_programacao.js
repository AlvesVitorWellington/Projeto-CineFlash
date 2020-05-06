//querySelector retorna o 1º elemento de acordo com o parametro, nesse caso retorna o elemento do id link.
//Dividi em dois botoes porque o queryselector so retorna 1, o primeiro, eu precisava de eventos em dois botoes
//no queryselector você diz a ele o caminho onde esta o elemento, tipo quando você vai estilizar no css e coloca "div ul li".
var botao1 = document.querySelector('.comprar1');
var botao2 = document.querySelector('.comprar2');

//da pra resumir essas duas etapas em uma, assim: document.querySelector('.comprar1').onclick = function abreJanela(),
//mas do jeito que esta se torna mais facil de entender.

//onclick função que dispara alguma ação ao clicar com o mouse.
botao1.onclick = function abrirJanela() {
    //propoções da Tela de Formulário em porcetagem pra se adequar a diferentes telas.
    //secreen retornar as proporções da tela do usuario.
    var largura = (screen.width * 40) / 100;
    var altura = (screen.height * 50) / 100;
    var topo = (screen.height * 25) / 100;
    var esquerda = (screen.width * 30) / 100;

    //metodo responsavel por abrir uma nova guia de acordo com os parametros.
    //1º parametro a url, como o arquivo esta na mesma pasta foi utilizado apenas o nome do arquivo;
    //2º parametro tem varios valores suportados, nesse caso esta sem nada, quando sem nada o padrão é o _blank;
    //3º parametro tem varios valores suportados, nesse caso são as dimenções da nova guia de acordo com as variaveis anteriores;
    window.open('formulario.html', '', 'width=' + largura + ',height=' + altura + ',top=' + topo + ',left=' + esquerda + ',right=' + esquerda);

};

botao2.onclick = function abrirJanela() {
    var largura = (screen.width * 40) / 100;
    var altura = (screen.height * 50) / 100;
    var topo = (screen.height * 25) / 100;
    var esquerda = (screen.width * 30) / 100;

    window.open('formulario.html', '', 'width=' + largura + ',height=' + altura + ',top=' + topo + ',left=' + esquerda + ',right=' + esquerda);
};