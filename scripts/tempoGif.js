
/*
*	Inicia o displau do plano
*
*	@param plano objeto 'plano' que contem o array exercicios
*	@version 1.0
*/
function startDisplay(plano){
	display(plano.getExercicios(), 0);
}


/*
*	Organiza o tempo que uma imagem ira ser representada
*
*	@param plano plano que contem o exercico a demonstrar
*	@param index index do exercico a mostrar
*	@version 3.0
*/
function display(exercicios, index){
			
	// Param tempo em milis 60*1000 -> 1 minuto 
	imagem(exercicios[index].getURL());
	setTimeout(function() {
		var el = document.getElementById("img1");
		el.parentNode.removeChild(el);

		//Se for o ultimo exercicio nao mostra intervalo
		if (index + 1 != exercicios.length){

			//Intervalo de 2 minutos -> 2 * 60 * 1000
			imagem('assets/intervalo.jpg');
			setTimeout(function() {
				var el_I = document.getElementById("img1");
				el_I.parentNode.removeChild(el_I);

			 
				display(exercicios, index + 1);
			}, 2 * 60 * 1000);
		}
		else{
			console.log('Terminou o treino')
			return;
		}

		 

		
	}, exercicios[index].getDuracao() * 60 * 1000);
}


/*
*	Cria um elemento imagem e adiciona-o ao elemento 'myDiv'
*	
*	@param img_URL - url da imagem 
*	@version 1.0
*/
function imagem(img_URL) {
    var img = document.createElement("IMG");
    img.src = img_URL;
    img.setAttribute("id", "img1");
    document.getElementById('divGifs').appendChild(img);

}