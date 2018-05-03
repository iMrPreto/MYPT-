
/**
*	Funcao que cria o pop-up de confirmacao
*
*	@param btn_id - id do botao
*	@param funcao - funcao que o botao exerce
*	@param msg 	  - msg a aparecer no pop-up
*
*	@version 1.0
*/
function createsWarning(btn_id, funcao, msg){
	var modal = document.getElementById("myModal");

	var btn = document.getElementById(btn_id);

	var span = document.getElementsByClassName("close")[0];

	var div_msg =  document.getElementById("msg_modal");
	div_msg.innerHTML = msg;

	
	modal.style.display = 'block';
	

	span.onclick = function() {
		modal.style.display = 'none';
	}

	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = 'none';
		}
	}

	var confirma = document.getElementById("conf");
	confirma.onclick = function(){
		funcao();
		set_button_color ('btLatAcompanhamentoNut', 'rgb(205,205,205)');
		set_button_color ('btLatAvaliacaoFisica', 'rgb(205,205,205)');
		set_button_color ('btLatplanoMensal', 'rgb(205,205,205)');
		set_button_color ('btLatPlanoPersonalizado', 'rgb(205,205,205)');
		modal.style.display = 'none';

	};

	var cancela = document.getElementById("canc");
	cancela.onclick = function(){
		modal.style.display = 'none';
	};
}



// =================================================== Por comentar
function hide(id){
	//$("#" + id).removeClass( "show" ).addClass( "hide" );
	document.getElementById(id).style.display = 'none';
}
function show(id){
	//$("#" + id).removeClass( "hide" ).addClass( "show" );
	document.getElementById(id).style.display = 'block';
}
function iniciarTreino(){
	if (marcacaoHoje()){
		hide('agendaID');
		hide('calendarioShow');
		show('treinoStart');
		show('esquema');
		escreverEsquema();
		
	}
}
function escreverEsquema(){
	var doc = document.getElementById('esquema');
	var a = tipoTreinoHoje();
	var inicio = '<h3>Treino '+ tipoTreinoHoje()+'</h3>';
	listaExercicios (doc, inicio);
}

function listaExercicios (doc, inicio){
	var treinoHj = tipoTreinoHoje();
	var treino = getTreino(treinoHj);
	var ex = treino.getExercicios();
	var time = treino.getDuracao();
	inicio = inicio +'<h4>Duração: '+ time +' minutos</h4><ol>';

	for (i = 0; i < ex.length; i++){
		inicio = inicio + '<ul>'+ex[i].getName()+'</ul>';
	}
	inicio = inicio + '</ol>';
	doc.innerHTML= inicio;
}

/*Hides e Shows de cada menu*/
function menuPlanoTreino(){
	hide('calendarioStart'); hide('passo2');hide('treinoStart'); hide('menuPrincipal');hide('snackID');hide("terminar_selecao_individual");
	hide ('testesIndividuais');
	show('menuLateral');show('topnav');show('agendaID');show('calendarioShow');show('calendarTab');hide('calendarioStart');hide('avCondFisicaID');
	
	if(marcacaoHoje()==false)
		hide ('iniciarTreinoHoje');
	else
		show ('iniciarTreinoHoje'); 
	
}
function menuAcompanhamentoNut(){
	hide('calendarioStart'); hide('passo2');hide('treinoStart'); hide('menuPrincipal');hide('agendaID');hide('calendarioShow');hide('avCondFisicaID');
	show('menuLateral');show('topnav'); show("snackID");show("snackOpt");hide('textoNutritivo');
}
function menuInicial(){
	hide('calendarioStart'); hide('passo2');hide('treinoStart');hide('agendaID');hide('calendarioShow');hide('avCondFisicaID');
	hide('menuLateral');hide('topnav'); hide("snackID");hide("snackOpt");hide('textoNutritivo');show('menuPrincipal');
}

function menuAvCondicaoFisica(){
	hide('menuPrincipal');hide('calendarioStart'); hide('passo2');hide('treinoStart');hide('agendaID');hide('calendarioShow');
	 hide("snackID");hide("snackOpt");hide('textoNutritivo');hide('testesIndividuais');
	show('topnav');show('menuLateral');	show('avCondFisicaID');show('inicialAv');
	//document.getElementById('avCondFisicaID').style.display = 'block';
	
}

function menuAgendaTreinos(){
	hide('agendaID'); hide('calendarTab');
	show('calendarioStart');
	document.getElementById('terminar_selecao_individual').style.display = 'none';
	document.getElementById('terminar_selecao').style.display = 'none';
}

/* FIM Hides e Shows de cada menu*/



/*
$(document).ready(function(){
	$("#btcomecarTreino").click (function(){
		move();startDisplay();hide(this.id);hide(menuLateral);
	})
}) 
*/

function set_button_color (id, cor){
	   document.getElementById(id).style.backgroundColor = cor;
}

$(document).ready(function(){  
//cor inicial botoe rgb(143,143,189)
//cor nao rgb(205,205,205)
	$("#btLatAcompanhamentoNut").click (function(){
		set_button_color ('btLatAcompanhamentoNut', 'rgb(143,143,189)');
		set_button_color ('btLatAvaliacaoFisica', 'rgb(205,205,205)');
		set_button_color ('btLatplanoMensal', 'rgb(205,205,205)');
		set_button_color ('btLatPlanoPersonalizado', 'rgb(205,205,205)');
	})
	$("#btLatAvaliacaoFisica").click (function(){
		set_button_color ('btLatAvaliacaoFisica', 'rgb(143,143,189)');
		set_button_color ('btLatAcompanhamentoNut', 'rgb(205,205,205)');
		set_button_color ('btLatplanoMensal', 'rgb(205,205,205)');
		set_button_color ('btLatPlanoPersonalizado', 'rgb(205,205,205)');
	})   
	$("#btLatplanoMensal").click (function(){
		set_button_color ('btLatplanoMensal', 'rgb(143,143,189)');
		set_button_color ('btLatAvaliacaoFisica', 'rgb(205,205,205)');
		set_button_color ('btLatAcompanhamentoNut', 'rgb(205,205,205)');
		set_button_color ('btLatPlanoPersonalizado', 'rgb(205,205,205)');
	})
	$("#btLatPlanoPersonalizado").click (function(){
		set_button_color ('btLatPlanoPersonalizado', 'rgb(143,143,189)');
		set_button_color ('btLatAvaliacaoFisica', 'rgb(205,205,205)');
		set_button_color ('btLatAcompanhamentoNut', 'rgb(205,205,205)');
		set_button_color ('btLatplanoMensal', 'rgb(205,205,205)');
	})
})

$(document).ready(function(){  
	//cor inicial botoe rgb(143,143,189)
	//cor nao rgb(205,205,205)
		$("#btAcompanhamentoNut1").click (function(){
			set_button_color ('btLatAcompanhamentoNut', 'rgb(143,143,189)');
		})
		$("#btAvaliacaoFisica1").click (function(){
			set_button_color ('btLatAvaliacaoFisica', 'rgb(143,143,189)');
		})   
		$("#planoMensal1").click (function(){
			set_button_color ('btLatplanoMensal', 'rgb(143,143,189)');
		})
		$("#btPlanoPersonalizado1").click (function(){
			set_button_color ('btLatPlanoPersonalizado', 'rgb(143,143,189)');

		})
	});