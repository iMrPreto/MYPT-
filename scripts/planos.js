function Utilizador (nome, idade, genero, peso, altura, limitacoes_fisicas, nivel, planosTreino){
    this.nome = nome;
    this.idade = idade;
    this.genero = genero;
    this.peso = peso;
    this.altura = altura;
    this.limitacoes_fisicas = limitacoes_fisicas;
    this.nivel = nivel;
    this.planosTreino = new Array ();
}


function Exercicio (nome, descricao, url_demonstracao, tipologia, grupos_musculares, duracao, material){
	this.nome = nome;
	this.descricao = descricao;
	this.demonstracao = url_demonstracao;
	this.tipologia = tipologia;
	this.grupos_musculares = grupos_musculares;
	this.duracao = duracao;
	this.material = material;

    this.getDuracao = getDuracao;
    this.getURL = getURL;
    this.getName = getName;

    function getName(){
        return this.nome
    };

    function getDuracao(){
        return this.duracao
    };

    function getURL(){
        return this.demonstracao
    };
}
//uns quantos exercicios
var exercicios = [
new Exercicio("Abdominais", "Trabalho dos músculos abdominais na posição de deitado", "assets/abs.gif", new Array ("tonificacao", "resistencia"), new Array ("abdominal"), 5, new Array ("colchao")),
new Exercicio("Agachamentos", "Simulação da posição de sentado fazendo um ângulo de 90º com as pernas", "assets/squat.gif", new Array ("tonificacao", "resistencia"), new Array ("quadris", "gluteos"), 5, new Array ("")),
new Exercicio("Lunges", "Na posição vertical, com um pé à frente e outro recuado, em linha, realizar uma flexão do joelho até perto do chão",
               "assets/lunge.gif", new Array ("tonificacao", "resistencia"), new Array ("quadris", "gluteos"), 5, new Array ("")),
new Exercicio("Flexões", "Fazer baixar o corpo de forma uniforme até que o peito fique a um palmo do solo, sem lhe tocar e de seguida regressar à posição inicial",
				"assets/pushUp.gif", new Array ("tonificacao", "resistencia"), new Array ("abdominal","tricepetes","deltoide"), 5, new Array ("colchao")),
new Exercicio("Prancha", "Permanecer com musculatura corporal fixa e contraída por um tempo determinado sem mexer o corpo.", "assets/plank.gif", 
				new Array ("tonificacao", "resistencia"),new Array ("abdominal","lombar"), 5, new Array ("colchao")),
new Exercicio("Jumping Jack", "Afaste as pernas e coloque os braços no ar afastados. Com um salto, aproxime as pernas e junte os braços por cima da cabeça.", "assets/jumpingjack.gif", 
				new Array ("intensidade"),new Array ("gluteos","trapezio","deltoide"), 5, new Array ("")),
new Exercicio("Steps", "Colocar primeiro um dos pés na parte superior numa plataforma e logo em seguida o outro para então recuar o primeiro pé e, de imediato, trazer o outro de volta ao chão num movimento de subir e descer.", "assets/steps.gif", 
				new Array ("intensidade"),new Array ("abdominal","gluteos", "quadris"), 5, new Array ("plataforma elevada")),
new Exercicio("Sprint", "Corrida a alta velocidade num percurso de 200 metros", "assets/sprint.gif", 
				new Array ("intensidade"),new Array ("quadris","gluteos"), 5, new Array ("")),
new Exercicio("Skipping", "Levante o joelho até a altura da cintura, com os braços perpendiculares ao corpo num ângulo de 90º, e as pontas dos pés a tocar no solo", "assets/skipping.gif", 
				new Array ("intensidade"),new Array ("quadris","gluteos"), 5, new Array ("")),
new Exercicio("Vai e Vem", "Correr uma determinada distância até alcançar um marco, regressando quando ouve um sinal sonoro, repetindo o mesmo processo o máximo de vezes.", "assets/vaievem.gif", 
				new Array ("resistencia"),new Array ("quadris","gluteos", "gemeos"), 10, new Array (""))

];

function Treino (tipo, duracao, exercicios){
    this.tipo = tipo;
    this.duracao = duracao;
    this.exercicios = exercicios; // array de ex
    this.getDuracao = getDuracao;
    this.getExercicios = getExercicios;

    function getDuracao(){
    	return this.duracao;
    };

    function getExercicios(){
        return this.exercicios
    };
}

var treinoTonificacao = new Treino("tonificacao", 54, new Array (exercicios[0], exercicios[1], exercicios[2], exercicios[4], exercicios[0], exercicios[1], exercicios[2], exercicios[4]));
var treinoIntensidade = new Treino("intensidade", 54, new Array (exercicios[5], exercicios[6], exercicios[7], exercicios[8], exercicios[6], exercicios[5], exercicios[8], exercicios[7]));
var treinoResistencia = new Treino("resistencia", 59, new Array (exercicios[0], exercicios[1], exercicios[2], exercicios[4], exercicios[9], exercicios[2], exercicios[0], exercicios[1]));

function Plano_Treino (dias, treino){
    this.dias = dias;
    this.treino =  treino;// array de treinos

}

function getTreino (tipo){
    if ('Tonificação' == tipo)
        return treinoTonificacao;
    if ('Resistência' == tipo)
        return treinoResistencia;
    if ('Intensidade' == tipo)
        return treinoIntensidade;
}

function getPlanos(){
	return new Array(treinoResistencia, treinoIntensidade, treinoTonificacao);
}
