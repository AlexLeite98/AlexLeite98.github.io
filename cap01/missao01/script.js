function missao1(){
	document.getElementById("texto1").style.display = "none";
	document.getElementById("texto2").style.display = "block";
}

function missao2(){
	document.getElementById("texto2").style.display = "none";
	document.getElementById("texto3").style.display = "block";
}

function missao3(){
	document.getElementById("texto3").style.display = "none";
	document.getElementById("texto4").style.display = "block";
}

function missao4(){
	document.getElementById("texto4").style.display = "none";
	document.getElementById("texto5").style.display = "block";
}

function voltar(){
	document.getElementById("texto1").style.display = "block";
	document.getElementById("texto2").style.display = "none";
	document.getElementById("texto3").style.display = "none";
	document.getElementById("texto4").style.display = "none";
	document.getElementById("texto5").style.display = "none";
	
}

function analise(){
	let valor = document.getElementById("prompt").value;
	
	if(valor%2 == 0){
		document.getElementById("resultado1").innerHTML = "Ordem dos Pares!";
	}else{
		document.getElementById("resultado1").innerHTML = "Caos dos Impares!";
	}
}

function alistar(){
	let idade = document.getElementById("idade").value;
	
	if(idade>=18){
		document.getElementById("resultado2").innerHTML = "Alistamento aprovado!";
	}else{
		document.getElementById("resultado2").innerHTML = "Alistamento negado! Menor de idade.";
	}
}

function media(){
	let nota1 = Number(document.getElementById("arcano").value);
	let nota2 = Number(document.getElementById("runas").value);
	let media = (nota1+nota2)/2;
	
	if(media >= 6.5){
		document.getElementById("resultado3").innerHTML = "Parabêns! Vc vai para capital.";
		
	}else{
		document.getElementById("resultado3").innerHTML = "Infelizmente vc não acançou a média.";
	}
}