function Snack (nome, informacaoNutricional, momento, tipoTreino, imagem){
    this.nome = nome;
    this.informacaoNutricional = informacaoNutricional;
    this.momento = momento;
    this.tipoTreino = tipoTreino;
    this.imagem = imagem;

    function getImagem(){
        return this.imagem
    };


    //?? get ver se é necessario -----------------------------------------------------------
}

var snacks = [
    new Snack (" Maçã", "Uma maçã contém cerca de 72 quilocalorias. Recomenda-se que a ingestão ocorra, pelo menos, meia hora antes do treino.", "pre", new Array ("tonificacao", "resistencia", "intensidade"), "assets/maca.jpg"),
    new Snack (" Bolachas Integrais Proalimentar com compota", "Uma bolacha integral (6,3 gramas) contém cerca de 26 quilocalorias e uma colher de sopa de compota, com açucar reduzido, contém cerca de 34 quilocalorias. Recomenda-se que a ingestão ocorra, pelo menos, meia hora antes do treino.", "pre", new Array ("tonificacao", "resistencia", "intensidade"), "assets/bolcomp.jpg"),
    new Snack (" Frutos Secos", "Uma porção de 30 gramas de nozes contém aproximadamente 210 quilocalorias. Recomenda-se que a ingestão ocorra, pelo menos, meia hora antes do treino.", "pre", new Array ("tonificacao", "resistencia", "intensidade"), "assets/frutossecos.jpg"),
    new Snack (" Aveia Instantânea", "Uma porção de 40 gramas de aveia instantânea contém cerca de  143 quilocalorias. Recomenda-se que a ingestão ocorra, pelo menos, meia hora antes do treino.", "pre", new Array ("tonificacao", "resistencia", "intensidade"), "assets/aveia.jpg"),
    new Snack (" Omelete", "Uma porção de omelete (aproximadamente 62 gramas) contém cerca de 98 quilocalorias. Recomenda-se que a ingestão ocorra, pelo menos, meia hora antes do treino.", "pre", new Array ("tonificacao", "resistencia", "intensidade"), "assets/omelete.jpg"),

    new Snack (" Batata Doce", "Uma batata doce média (com 5,5 cm a 8 cm de diâmetro) contém cerca de 163 quilocalorias. Recomenda-se que a ingestão ocorra, no máximo, até 45 minutos depois do treino.", "pos", new Array ("intensidade"), "assets/batata.jpg"),
    new Snack (" Cereais Integrais", "Uma porção de 40 gramas de cereais integrais contém cerca de 147 quilocalorias. Recomenda-se que a ingestão ocorra, no máximo, até 45 minutos depois do treino.", "pos", new Array ("intensidade"), "assets/cereaisi.jpg"), 
    new Snack (" Barrita de Cereais de Chocolate", "Uma barrita de cereais de chocolate (24 gramas) contém cerca de 91 quilocalorias. Recomenda-se que a ingestão ocorra, no máximo, até 45 minutos depois do treino.", "pos", new Array ("resistencia", "intensidade"), "assets/barrachocolate.jpg"), 
    new Snack (" Omelete", "Uma porção de omelete (aproximadamente 62 gramas) contém cerca de 98 quilocalorias. Recomenda-se que a ingestão ocorra, no máximo, até 45 minutos depois do treino.", "pos", new Array ("resistencia"), "assets/omelete.jpg"),
    new Snack (" Banana", "Uma banana média contém cerca de 58 quilocalorias. Recomenda-se que a ingestão ocorra, no máximo, até 45 minutos depois do treino.", "pos", new Array ("tonificacao"), "assets/banana.jpg"),
    new Snack (" Iogurte Natural", "Uma embalagem de 120 gramas de iogurte natural contém cerca de 69 quilocalorias. Recomenda-se que a ingestão ocorra, no máximo, até 45 minutos depois do treino.", "pos", new Array ("tonificacao"), "assets/iogurte.jpg")    
];

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function associarSnack (tipoTreino, momento){
    var result;
    var index;

    if (momento == "pre"){
        index = getRndInteger(0,4);
        result = "<h3 id = 'nomeNut'>Snack recomendado: " + snacks[index].nome + "</h3><p>" + snacks[index].informacaoNutricional + "</p><div class ='imagesNut' id='imagensNut'><img src="+snacks[index].imagem+" height='200' width='320'></div>";
    }
    else if (momento == "pos"){
        if (tipoTreino == "intensidade"){
            index = getRndInteger(5,7);
            result = "<h3 id = 'nomeNut'>Snack recomendado: " + snacks[index].nome + "</h3><p>" + snacks[index].informacaoNutricional + "</p><div class ='imagesNut' id='imagensNut'><img src="+snacks[index].imagem+" height='200' width='320'></div>";
        }
        if (tipoTreino == "resistencia"){         
            index = getRndInteger(7,8);
            result = "<h3 id = 'nomeNut'>Snack recomendado: " + snacks[index].nome + "</h3><p>" + snacks[index].informacaoNutricional + "</p><div class ='imagesNut' id='imagensNut'><img src="+snacks[index].imagem+" height='200' width='320'></div>";
        }
        if (tipoTreino == "tonificacao"){
            index = getRndInteger(9,10);
            result = "<h3 id = 'nomeNut'>Snack recomendado: " + snacks[index].nome + "</h3><p>" + snacks[index].informacaoNutricional + "</p><div class ='imagesNut' id='imagensNut'><img src="+snacks[index].imagem+" height='200' width='320'></div>";
        }
    }
    return result;
}


var momentoNut;
var tipoTreinoNut;

function menuSnack(){
    hide('calendarioStart'); show('agendaID');hide('passo2')
}

function set_button_color (id, cor){
    document.getElementById(id).style.backgroundColor = cor;
}

$(document).ready(function(){
//cor inicial botoe rgb(16, 63, 140)
//cor nao rgb(5, 20, 45)
    $("#intensidadeNut").click (function(){
        tipoTreinoNut = "intensidade";
		set_button_color ('intensidadeNut', 'rgb(45, 87, 155)');
		set_button_color ('resistenciaNut', 'rgb(5, 20, 45)');
		set_button_color ('tonificacaoNut', 'rgb(5, 20, 45)');
    })
    $("#resistenciaNut").click (function(){
        tipoTreinoNut = "resistencia";
		set_button_color ('resistenciaNut', 'rgb(78, 162, 211)');
		set_button_color ('intensidadeNut', 'rgb(5, 20, 45)');
		set_button_color ('tonificacaoNut', 'rgb(5, 20, 45)');
    })
    $("#tonificacaoNut").click (function(){
        tipoTreinoNut = "tonificacao";
		set_button_color ('tonificacaoNut', 'rgb(17, 170, 168)');
		set_button_color ('resistenciaNut', 'rgb(5, 20, 45)');
		set_button_color ('intensidadeNut', 'rgb(5, 20, 45)');
    })
    $("#preNut").click (function(){
        momentoNut = "pre";
		set_button_color ('preNut', 'rgb(16, 63, 140)');
		set_button_color ('posNut', 'rgb(5, 20, 45)');
    })
    $("#posNut").click (function(){
        momentoNut = "pos";
		set_button_color ('posNut', 'rgb(16, 63, 140)');
		set_button_color ('preNut', 'rgb(5, 20, 45)');
    })
    $("#terminar_selecao_Nut").click (function(){
        var result = associarSnack (tipoTreinoNut, momentoNut);
		hide('snackOpt');
        show ('textoNutritivo');
        set_button_color ('resistenciaNut', 'rgb(78, 162, 211)');
		set_button_color ('intensidadeNut', 'rgb(45, 87, 155)');
        set_button_color ('tonificacaoNut', 'rgb(17, 170, 168)');
        set_button_color ('posNut', 'rgb(5, 20, 45)');
		set_button_color ('preNut', 'rgb(5, 20, 45)');
        document.getElementById("textoNutritivo").innerHTML = result;
    })
})