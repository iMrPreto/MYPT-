function Teste (nomeTeste, descricao, resultadoTeste){

    this.nomeTeste = nomeTeste;
    this.descricao = descricao;
    this.resultadoTeste = resultadoTeste;
}
var peso, altura, genero, idade, pulsoAntes, pulsoFinal, pulsoMinuto,numeroAbdominais ;


var teste = [
    new Teste ("IMC", "Medida internacional de obesidade adotada pela Organização Mundial Saúde (OMS). Verifica se a pessoa tem o peso ideal.", calculoIMC(peso, altura)),
    new Teste ("Teste de Ruffier-Dickson", "Avalia a recuperação do sistema cardiopulmonar através da contagem das pulsações antes e após a realização de uma prova de esforço padronizada, nomeadamente, flexões.", ruffierDickson(pulsoAntes, pulsoFinal, pulsoMinuto)),
    new Teste ("Teste de Abdominais", "Avalia a força média dos músculos abdominais.", testeAbdominais(numeroAbdominais, genero, idade))
];

function calculoIMC (peso, altura){
    
    var calculo = Math.round (peso / (altura*altura));
    var string = "IMC = " + calculo + "     Classificação: ";
    
    switch(true){

        case (calculo < 16): 
            return string + "Magreza grave";

        case (calculo >= 16 && calculo < 17):
            return string + "Magreza moderada";
        
        case (calculo >= 17 && calculo < 18,5):
            return string + "Magreza leve";

        case (calculo >= 18,5 && calculo < 25):
            return string + "Saudável";
        
        case (calculo >= 25 && calculo < 30):
            return string + "Sobrepeso";
        
        case (calculo >= 30 && calculo < 35):
            return string + "Obesidade grau I (ligeira)";
        
        case (calculo >= 35 && calculo < 40):
            return string + "Obesidade grau II (severa)";
        
        case (calculo >= 40):
            return string + "Obesidade grau III (mórbida)";
    }
}

function ruffierDickson (pulsoAntes, pulsoFinal, pulsoMinuto){

    var calculoRuffier = Math.round (((pulsoFinal - 70) + (pulsoMinuto - pulsoAntes))/10);
    var string = "Índice de Ruffier-Dickson = " + calculoRuffier + " Classificação: ";
   
    switch (true){
        
        case (calculoRuffier > 0 && calculoRuffier <=3):
            return string + "Excelente";

        case (calculoRuffier > 4 && calculoRuffier <= 6):
            return string + "Normal";
        
        case (calculoRuffier > 7 && calculoRuffier <= 8):
            return string + "Fraco";
        
        case (calculoRuffier > 8):
            return string + "Inapto";

    }
}

function testeAbdominais (numeroAbdominais, genero, idade){

    var string = "Número de abdminais: " + numeroAbdominais + "Classificação: ";

    if (idade > 50)
        return "Este teste não está definido para indivíduos com idades superiores a 44 anos."

    if (genero == "masculino"){
        if (idade <= 29){
            switch (true){

                case (numeroAbdominais >= 0 && numeroAbdominais <= 19):
                    return string + "Mau";

                case (numeroAbdominais >= 20 && numeroAbdominais <= 39):
                    return string + "Fraco";
                
                case (numeroAbdominais >= 40 && numeroAbdominais <= 59):
                    return string + "Suficiente";
                
                case (numeroAbdominais >= 60 && numeroAbdominais <= 79):
                    return string + "Bom";
                
                case (numeroAbdominais >= 80 && numeroAbdominais <= 85):
                    return string + "Muito Bom";
            }
        }

        if (idade >= 30 && idade <= 34){
            switch (true){

                case (numeroAbdominais >= 0 && numeroAbdominais <= 12):
                    return string + "Mau";

                case (numeroAbdominais >= 13 && numeroAbdominais <= 32):
                    return string + "Fraco";
                
                case (numeroAbdominais >= 33 && numeroAbdominais <= 52):
                    return string + "Suficiente";
                
                case (numeroAbdominais >= 53 && numeroAbdominais <= 69):
                    return string + "Bom";
                
                case (numeroAbdominais >= 70 && numeroAbdominais <= 75):
                    return string + "Muito Bom";
            }
        }

        if (idade >= 35 && idade <= 39){
            switch (true){

                case (numeroAbdominais >= 0 && numeroAbdominais <= 10):
                    return string + "Mau";

                case (numeroAbdominais >= 11 && numeroAbdominais <= 27):
                    return string + "Fraco";
                
                case (numeroAbdominais >= 28 && numeroAbdominais <= 47):
                    return string + "Suficiente";
                
                case (numeroAbdominais >= 48 && numeroAbdominais <= 64):
                    return string + "Bom";
                
                case (numeroAbdominais >= 65 && numeroAbdominais <= 70):
                    return string + "Muito Bom";
            }
        }

        if (idade >= 40 && idade <= 44){
            switch (true){

                case (numeroAbdominais >= 0 && numeroAbdominais <= 8):
                    return string + "Mau";

                case (numeroAbdominais >= 9 && numeroAbdominais <= 22):
                    return string + "Fraco";
                
                case (numeroAbdominais >= 23 && numeroAbdominais <= 42):
                    return string + "Suficiente";
                
                case (numeroAbdominais >= 43 && numeroAbdominais <= 59):
                    return string + "Bom";
                
                case (numeroAbdominais >= 60 && numeroAbdominais <= 65):
                    return string + "Muito Bom";
            }
        }

    }

    if (genero == "feminino"){

        if (idade <= 29){
            switch (true){

                case (numeroAbdominais >= 0 && numeroAbdominais <= 4):
                    return string + "Mau";

                case (numeroAbdominais >= 5 && numeroAbdominais <= 24):
                    return string + "Fraco";
                
                case (numeroAbdominais >= 25 && numeroAbdominais <= 44):
                    return string + "Suficiente";
                
                case (numeroAbdominais >= 45 && numeroAbdominais <= 64):
                    return string + "Bom";
                
                case (numeroAbdominais >= 65 && numeroAbdominais <= 70):
                    return string + "Muito Bom";
            }
        }

        if (idade >= 30 && idade <= 34){
            switch (true){

                case (numeroAbdominais >= 0 && numeroAbdominais <= 2):
                    return string + "Mau";

                case (numeroAbdominais >= 3 && numeroAbdominais <= 22):
                    return string + "Fraco";
                
                case (numeroAbdominais >= 23 && numeroAbdominais <= 42):
                    return string + "Suficiente";
                
                case (numeroAbdominais >= 43 && numeroAbdominais <= 59):
                    return string + "Bom";
                
                case (numeroAbdominais >= 60 && numeroAbdominais <= 65):
                    return string + "Muito Bom";
            }
        }

        if (idade >= 35 && idade <= 39){
            switch (true){

                case (numeroAbdominais = 0):
                    return string + "Mau";

                case (numeroAbdominais >= 1 && numeroAbdominais <= 18):
                    return string + "Fraco";
                
                case (numeroAbdominais >= 19 && numeroAbdominais <= 38):
                    return string + "Suficiente";
                
                case (numeroAbdominais >= 39 && numeroAbdominais <= 54):
                    return string + "Bom";
                
                case (numeroAbdominais >= 55 && numeroAbdominais <= 60):
                    return string + "Muito Bom";
            }
        }

        if (idade >= 40 && idade <= 44){
            switch (true){

                case (numeroAbdominais = 0):
                    return string + "Mau";

                case (numeroAbdominais >= 1 && numeroAbdominais <= 13):
                    return string + "Fraco";
                
                case (numeroAbdominais >= 14 && numeroAbdominais <= 33):
                    return string + "Suficiente";
                
                case (numeroAbdominais >= 34 && numeroAbdominais <= 49):
                    return string + "Bom";
                
                case (numeroAbdominais >= 50 && numeroAbdominais <= 55):
                    return string + "Muito Bom";
            }
        }
    }
	
	var genero = 'feminino';
	$(document).ready(function(){
		$("#infoIMC").click (function(){
			show('descIMC');
			var desc = "<p>" + teste[0].descricao + "</p>";
			document.getElementById('descIMC').innerHTML = desc;
		})
		
	//CATARINA ADICIONOU NO DIA 1/5
		$("#infoRuffier").click (function(){
			show('descRuffier');
			var desc = "<p>" + teste[1].descricao + "</p>";
			document.getElementById('descRuffier').innerHTML = desc;
        })
        
        $("#infoAbdominais").click (function(){
			show('descAbdominais');
			var desc = "<p>" + teste[2].descricao + "</p>";
			document.getElementById('descAbdominais').innerHTML = desc;
		})
		$("#avIMC").click (function(){
			hide ('inicialAv');
			show('testesIndividuais');
			show('testeIMC');
			var desc = "<p>" + calculoIMC(70,180/100) + "</p>"; //COLOCAR VALORES DO UTILIZADOR
			document.getElementById('resultIMC').innerHTML = desc;
		})
		$("#avRuffier").click (function(){
			hide ('inicialAv');
			show('testesIndividuais');
			show('testeRuffier');//PI*4
			var x;
			if (genero == 'masculino')
				x = ' 30 flexões durante 45';
			else
				x = ' 20 flexões durante 30'
			
			var str = 'Agora, execute '+ x +' segundos.'
			document.getElementById('exNumero').innerHTML = str;
			
		})
		$("#calcularRuffier").click (function(){
			var desc = "<p>" + ruffierDickson(20*4,20*4,20*4)+ "</p>"; //COLOCAR VALORES DO UTILIZADOR E SÓ APARECER DEPOIS DE SUBMENTER
			document.getElementById('resultRuffier').innerHTML = desc;
		})
	})
}