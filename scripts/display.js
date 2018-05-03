/*
*	ResponsaveL por mostrar a barra de progresso, os gif's e acabar o treino
*	@author IPM015
*/

$(document).ready(function() {
	var plano_treino;
    var exercicios;
    var index = 0;
	var tempo_plano;
	var tempo_gif = 0;
	var duration;
    var maxWidth = 600;
    

    var $log     = $('#log');
    var $comecar = $('#btcomecarTreino');
    var $parar   = $('#btPararTreino');
    var $acelera = $('#acelera');
    var $sair  = $('#voltar');
    var $cont    = $('#btcontinuarTreino');

    var timer;

    // =============== Acoes ===============

    $comecar.on('click', function() {
    	plano_treino = getTreino(tipoTreinoHoje());
        exercicios   = plano_treino.getExercicios();
		tempo_plano  = plano_treino.getDuracao();

		duration = tempo_plano * 1000 * 60;

        start();
    });

    $parar.on('click', function() {
        stop();
    });

    $cont.on('click', function() {
        continuar();
    });

    //FIXME 
    $sair.on('click', function() {
        $comecar.show();
        $parar.hide();
        $acelera.hide();
        $sair.hide();
        $cont.hide();


        try{
            var el = document.getElementById("img1");
            el.parentNode.removeChild(el);
        }catch(err){}

        var $bar = $('#bar');
        $bar.finish().css('width', 0); 

        menuPlanoTreino();
    });

     
    $acelera.on('click', function() {
        $acelera.hide();


    	timer_gif.pause();
    	stopBarra();

        //Remove o GIF prévio
        var el = document.getElementById("img1");
        el.parentNode.removeChild(el);
        
        
        duration = 30 * 1000;
        display(exercicios, 'acelera');

        timer_gif.resume();
        startBarra();
    });

    // =====================================

    /**
    * Inicia o display
    *
    * @version 1.0
    */
    function start(){
    	
    	// =================================================
    	// Botoes
    	if($comecar.is(':visible'))
    		$comecar.hide();

        $parar.show();
        $acelera.show();
        // =================================================

        // =================================================
        // Barra Progresso
        startBarra();
        // =================================================


        // =================================================
        // Gif's
    	display(exercicios, 'normal');
        // =================================================
    };

    /**
    * Para o display
    *
    * @version 1.0
    */
    function stop(){
        
    	// =================================================
    	// Botoes
    	$comecar.hide();
        $cont.show();
        $sair.show();
        $parar.hide();
        // =================================================

		// =================================================
        // Barra Progresso

        stopBarra();
        // =================================================

        // =================================================
        // Gif's
        timer_gif.pause();
        // ================================================= 
    }

    /**
    *   Continua o display
    *
    *   @version 3.0
    */
    function continuar(){
    	$cont.hide();
    	$parar.show();
    	$sair.hide();

    	startBarra();

    	timer_gif.resume();
    }

    /**
    *   Inicia o processo da barra
    *
    *   @version 1.0
    */
    function startBarra(){
    	var $bar = $('#bar');
        Horloge(maxWidth);
        timer = setInterval('Horloge('+maxWidth+')', 100);

        $bar.animate({
            width: maxWidth
        }, duration, function() {

            $(this).css('background-color', 'green');
            $parar.hide();
            $sair.show();
            $log.html('100 %');
            clearInterval(timer);

        });
    }

    /**
    *   Para o processo da barra
    *
    *   @version 1.1
    */
    function stopBarra(){
    	var $bar = $('#bar');
        $bar.stop();

        clearInterval(timer);

        var w = $bar.width();
        var percent = parseInt((w * 100) / maxWidth);
        $log.html(percent + ' %');
    }
    
	/*
	*   Organiza o tempo que uma imagem ira ser representada
	*
	*   @param plano plano que contem o exercico a demonstrar
	*   @param spd   tipo de velocidade para mostrar os GIF's
    *                'normal' tempo real de cada exercicio
    *                'acelera' tempo acelerado so para demonstracao
	*   @version 4.0
	*/
	function display(exercicios, spd){
        var exercico = exercicios[index];
        var tempo;

		if(spd == 'normal')
			tempo = exercico.getDuracao() * 60 * 1000;
		else
            if (spd == 'acelera')
                tempo = 30 * 1000 / (exercicios.length);

	    imagem(exercico.getURL());

	    timer_gif = new Timer(function() {
	        var el = document.getElementById("img1");
	        el.parentNode.removeChild(el);

            index++;
            if(index != exercicios.length)
                display(exercicios, spd);
	    }, tempo);
	}

	/*
	*   Cria um elemento imagem e adiciona-o ao elemento 'myDiv'
	*   
	*   @param img_URL - url da imagem 
	*   @version 1.0
	*/
	function imagem(img_URL) {
	    var img = document.createElement("IMG");
	    img.src = img_URL;
	    img.setAttribute("id", "img1");
	    img.setAttribute("width", "300px");
	    img.setAttribute("align","left");
	    img.setAttribute("height", "210px");
	    img.setAttribute("margin-top", "50px");
	    img.setAttribute("margin-left", "50px");
	    document.getElementById('divGifs').appendChild(img);
	}

    /**
    *
    *
    *
    *
    */
    function resetTreino(){
        
        menuPlanoTreino();
    }
});

    /**
	*   Representa a precentagem na barra
	*
	*   @version 1.0
	*/
	function Horloge(maxWidth) {
	    var w = $('#bar').width();
	    var percent = parseInt((w * 100) / maxWidth);
	    $('#bar').html(percent + ' %');
	}

