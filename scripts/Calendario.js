function Mes (nome, mes_n, dias, dia_semana_inicio){
		this.nome = nome;
		this.mes_n = mes_n;
		this.dia_semana_inicio = dia_semana_inicio;
		this.dias = dias;
	}
	var meses = new Array (new Mes ('Abril',4,30,0), new Mes ('Maio',5,31,2), new Mes ('Junho',6,30,5), new Mes ('Julho',7,31,0));
	var diasMesTipoAtual; 
	/*Vetores com os dias de cada tipo de treino, o indice 0 corresponde ao mes atual e o 1 ao mes seguinte
	  Desta forma está prepado para uma adaptação do sistema com possibilidade de marcar para mais de 2 meses*/
	var diasMesTipoIntensidade = new Array (new Array(), new Array()); 
	var diasMesTipoResistencia = new Array (new Array(), new Array()); 
	var diasMesTipoTonificacao = new Array (new Array(), new Array());
	

	var data = new Date();
	var mesAtual = data.getMonth();
	var diaAtual = data.getDate();
	 /**
		Escrita do calendario do mes atual, com os dias que ja passaram do mes atual a cizento
	 */
	function writeMes (mes, nomeCalendario){
        var dias = mes.dias;
	  	var inicio = mes.dia_semana_inicio;		
		var titulo = document.getElementById(nomeCalendario).createCaption();
		titulo.innerHTML = '<b>'+mes.nome+'</b>';
		var table = document.getElementById(nomeCalendario);
	//	inicio = 0; //DOM-0 QUA-4
		var row;
		var count = 1;
		
		for (i = 1; i <= 5 && count <= dias; i++ ){//fevereiro pode ter apenas 4 semanas---------
			row = table.insertRow(i);
			if(i==1){
			   for (k = 0; k < inicio; k++){
					row.insertCell(k).innerHTML = '';
			   }
			}
			for(j = inicio; j < 7 && count <= dias; j++){
			    if((mes.mes_n == (mesAtual+1)) && count < diaAtual)
					row.insertCell(j).innerHTML = '<button id ="dia'+nomeCalendario+count+'" class="dia_button passed">'+count+'</button>';
				else
				    row.insertCell(j).innerHTML = '<button id ="dia'+nomeCalendario+count+'" class="dia_button" onclick="dias_switch(this.id)">'+count+'</button>';
				count++;	
			}
			inicio = 0;
		}
	}
	/**
		Dado o numero do mes, retorna o objeto Mes
	*/
	function getMes (num){
		for (i = 0; i < meses.length; i++ ){
			if(meses[i].mes_n == num)
				return meses[i];
		}
	}
	/**
	 Metodo que cria o calendario
	*/
	function createTableMesAtual(){
		writeMes (getMes(mesAtual+1), 'calendario1');
	}
	function createTableMesSeguinte(){
		writeMes (getMes(mesAtual+2),'calendarioSeguinte');
	}
	function get_button_color (id){
		return document.getElementById(id).style.backgroundColor;
	}

	function set_button_color (id, cor){
		document.getElementById(id).style.backgroundColor = cor;
	}
	
    function dias_switch (id){
		var diasTonificacao, diasResistencia, diasIntensidade;
		var mes;
	  	if (id.includes ("calendario1"))
			mes = 0;
		else 
			mes = 1;
		  diasTonificacao = diasMesTipoTonificacao[mes];
		  diasIntensidade = diasMesTipoIntensidade[mes];
		  diasResistencia = diasMesTipoResistencia[mes];
	  
		var cor = get_button_color(id);
		var index;
		switch(cor) {
		    case 'rgb(17, 170, 168)'://COR TEM DE ESTAR EM RGB PARA COMPARAR
		        set_button_color(id,'black');
				index = diasTonificacao.indexOf(id);
				diasTonificacao.splice(index,1);
		        break;
		    case 'rgb(45, 87, 155)':
		        set_button_color(id,'black');
				index = diasIntensidade.indexOf(id);
				diasIntensidade.splice(index,1);
		        break;
		    case 'rgb(78, 162, 211)':
		        set_button_color(id,'black');
				index = diasResistencia.indexOf(id);
				diasResistencia.splice(index,1);
		   		break;
		    default:
		       adicionar(id)
		}
	}
	
	function auxiliarAdicionar(id, cor, lista){
		document.getElementById(id).style.backgroundColor= cor;
		lista.push (id);
	}
	/**
	Metodo acionado ao carregar no dia do calendario
	-troca cor do dia para a do tipo de treino
	-adiciona o dia no vetor de dias de um certo tipo de treino
	-FALTA-remover um dia (retirar cor e retirar do vetor)
	
	*/
	function adicionar (id){
	 if (diasMesTipoAtual != null){
	   //nao poder marcar para antes do dia de hoje
	   //se nao estiver ainda com nenhuma marcacao
	   	var mes;
	   	if (id.includes("calendario1"))
			mes = 0;
		else
			mes = 1;

		switch(diasMesTipoAtual) {									//NOVA COR Resistência rgb(78, 162, 211)
		    case diasMesTipoTonificacao:
				auxiliarAdicionar(id,'#11aaa8',diasMesTipoTonificacao[mes]);
		        break;
		    case diasMesTipoIntensidade:
				auxiliarAdicionar(id,'#2d579b',diasMesTipoIntensidade[mes]);
		        break;
		    case diasMesTipoResistencia:
				auxiliarAdicionar(id,'rgb(78, 162, 211)',diasMesTipoResistencia[mes]);
		   		break;
		    default:
		       break;
			}
		}
	}
	/**
	  Metodo que indica se hoje tem uma marcacao de treino feita retorna true se tiver
	*/
	function marcacaoHoje(){
		return 	hasDiaAtual(diasMesTipoTonificacao[0]) || 
				hasDiaAtual(diasMesTipoResistencia[0]) ||
				hasDiaAtual(diasMesTipoIntensidade[0]);
	}
	
	function tipoTreinoHoje (){
		if (marcacaoHoje()){
			if (hasDiaAtual(diasMesTipoTonificacao[0]))
				return 'Tonificação';	
			if (hasDiaAtual(diasMesTipoResistencia[0]))
				return 'Resistência';
			if (hasDiaAtual(diasMesTipoIntensidade[0]))
				return 'Intensidade';
		}	
	}

	function hasDiaAtual(dia_tipo){
		var stop = false;
		for (var i = 0; !stop && i < dia_tipo.length; i++) 
			stop = dia_tipo[i]== 'diacalendario1'+diaAtual;

		return stop;
		
	}

	function confirmar (){
		var r = confirm ("Tem a certeza que pretende terminar?");
		if(r == true){
			menuPlanoTreino();
		}
	}

	function iniciarTreino(){
		if (marcacaoHoje()){
			show('treinoStart');
			hide('agendaID');
			hide('calendarioShow');
		}
	}

	$(document).ready(function(){
		$(".treino").click (function(){
			show ('calendarTab');
			show ('passo2');
			hide ('terminar_selecao');
			document.getElementById('terminar_selecao_individual').style.display = 'block';
			document.getElementById('terminar_selecao').style.display = 'none';
		})
		$("#intensidade").click (function(){
			diasMesTipoAtual = diasMesTipoIntensidade;
			document.getElementById('resistencia').style.display = 'none';
			document.getElementById('tonificacao').style.display = 'none';
		})
		$("#resistencia").click (function(){
			diasMesTipoAtual = diasMesTipoResistencia;
			document.getElementById('intensidade').style.display = 'none';
			document.getElementById('tonificacao').style.display = 'none';
		})
		$("#tonificacao").click (function(){
			diasMesTipoAtual = diasMesTipoTonificacao;
			document.getElementById('intensidade').style.display = 'none';
			document.getElementById('resistencia').style.display = 'none';
		})
		$("#terminar_selecao_individual").click (function(){
			document.getElementById('intensidade').style.display = 'block';
			document.getElementById('resistencia').style.display = 'block';
			document.getElementById('tonificacao').style.display = 'block';
			document.getElementById('terminar_selecao').style.display = 'block';
			document.getElementById('terminar_selecao_individual').style.display = 'none';
			diasMesTipoAtual = null;
		})
		$("#mesSeguinte").click (function(){
			hide('calendarioMesAtual'); show('calendarMesSeguinte');
			hide('mesSeguinte'); show('mesAnterior');
		})
		$("#mesAnterior").click (function(){
			hide('calendarMesSeguinte');show('calendarioMesAtual'); 
			show('mesSeguinte'); hide('mesAnterior');
		})
    })