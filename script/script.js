var numeroSorteado = [];
var nrParaSortear = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
var x = 0;

//Botão Sortear
$("#btnSortear").click( function(){
    
     sortear();
});

//Botão Limpar Histórico
$("#btnLimpar").click(function(){
    limparHistorico();
});

//Função para Pegar número Randômicos
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

//Função para Realizar o Sorteio
function sortear()
{
    x = getRndInteger(0, nrParaSortear.length-1);
    console.log(nrParaSortear.length);
    console.log(x);
    if (nrParaSortear.length!==0)
    {
        let refPhoto = nrParaSortear[x];
        let src="img/"+refPhoto+".jpg";
        numeroSorteado.push(refPhoto);
        $("#imagemSorteada").attr("src", "img/"+refPhoto+".jpg");
        $("#historico").append("<img class='materialboxed' src="+src+">" );
        nrParaSortear.splice(x, 1);
    }else
    {
        $("#imagemSorteada").attr("src", "img/theend.gif");
    }

        
    
}

//Função Limpar Histórico
function limparHistorico()
{
    nrParaSortear = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    $("img").remove(" .materialboxed ");
}