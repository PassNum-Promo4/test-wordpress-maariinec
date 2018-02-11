var g6quizz=document.querySelector('#quizz');

var g6time=11;
var g6updateTime;
var g6score="";

var g6tableau = [];
	g6tableau[0] = ["Qu’es que MySql?", "un logiciel", "une interface", "site web", "application"];
	g6tableau[1] = ["Qu’es qu’une base de donnée ? ", "collection de données", "logiciel ", "application", "system"];
	g6tableau[2] = ["Comment créer une base de données ?", "created", "show", "use", "select"];
	g6tableau[3] = ["Comment supprimé une table ?", "drop", "show", "select", "use"];
	g6tableau[4] = ["Comment lister une base de données ?", "show", "drop", "created", "select"];
	g6tableau[5] = ["Comment spécifier avec quelle base de donnée on veut intéragir?", "use", "select", "describe", "alter"];
	g6tableau[6] = ["Comment afficher la structure d’une table ? ", "describe", "alter", "truncate", "use"];
	g6tableau[7] = ["Comment renommer une table? ", "alter", "drop", "created", "show"];
	g6tableau[8] = ["Comment vider une table ? ", "truncate", "use", "drop", "show"];
	g6tableau[9] = ["Comment sélectionner une table ?", "select", "truncate", "describe", "use"];

var g6interTableau = g6tableau;

var g6goodAnswers = "";

var g6reponse1="";
var g6reponse2="";
var g6reponse3="";
var g6reponse4="";


function g6randomQuestion(){
	var g6interQuestion = Math.floor(Math.random() * 10);
	var g6question = g6tableau[g6interQuestion];
	g6interTableau = g6interTableau.splice(g6interQuestion, 1);

		return g6question;
}

function g6randomAnswers(){
	 var g6currentQuestion=g6randomQuestion();
	 document.querySelector('#question').innerHTML= g6currentQuestion[0];
	 g6goodAnswers = g6currentQuestion[1];


	 g6reponse1 = g6currentQuestion[Math.floor(Math.random() * 4)+1];
	 g6reponse2 = g6currentQuestion[Math.floor(Math.random() * 4)+1];
	 while(g6reponse1 === g6reponse2){
	 g6reponse2 = g6currentQuestion[Math.floor(Math.random() * 4)+1];
	 }

	 g6reponse3 = g6currentQuestion[Math.floor(Math.random() * 4)+1];
	 while(g6reponse2 === g6reponse3 || g6reponse3 === g6reponse1){
	 g6reponse3 = g6currentQuestion[Math.floor(Math.random() * 4)+1];
	 }

	 g6reponse4 = g6currentQuestion[Math.floor(Math.random() * 4)+1];
	 while(g6reponse3 === g6reponse4 || g6reponse4 === g6reponse1 || g6reponse4 === g6reponse2){
	 g6reponse4 = g6currentQuestion[Math.floor(Math.random() * 4)+1];
	 }



	document.querySelector('#reponse1').textContent=g6reponse1;
    document.querySelector('#reponse2').textContent=g6reponse2;
	document.querySelector('#reponse3').textContent=g6reponse3;
	document.querySelector('#reponse4').textContent=g6reponse4;

	document.querySelector('#reponse1').addEventListener("click", g6randomAnswers);
	document.querySelector('#reponse2').addEventListener("click", g6randomAnswers);
	document.querySelector('#reponse3').addEventListener("click", g6randomAnswers);
	document.querySelector('#reponse4').addEventListener("click", g6randomAnswers);



return g6goodAnswers, g6reponse1, g6reponse2, g6reponse3, g6reponse4;
}


function g6result(){
	if (document.querySelector('#reponse1').value===g6goodAnswers) {
 	document.getElementById("").style.backgroundColor="green";
	}else{
 	document.getElementById("").style.backgroundColor="red";
	}
}

 function g6timer(){
  g6time = g6time-1; 
	document.getElementById('timer').innerHTML=g6time;
  g6updateTime=setTimeout(function(){g6timer()}, 1000); 
  if (g6time<1) {
    g6time=11;
    g6randomAnswers();
  }

  
}

function g6points(){
  g6score= g6score + 1;     
  document.getElementById('score').innerHTML=g6score;
  addPoints(g6score);
}


g6timer();
g6randomAnswers();
console.log(g6goodAnswers);

