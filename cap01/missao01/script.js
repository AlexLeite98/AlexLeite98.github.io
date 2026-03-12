function missao1(){
	document.getElementById("texto1").style.display = "none";
	document.getElementById("texto2").style.display = "block";
}

function missao2(){
	document.getElementById("texto2").style.display = "none";
	document.getElementById("texto3").style.display = "block";
}

function voltar(){
	document.getElementById("texto1").style.display = "block";
	document.getElementById("texto2").style.display = "none";
	document.getElementById("texto3").style.display = "none";
	
}

function analise(){
	let valor = document.getElementById("prompt").value;
	
	if(valor%2 == 0){
		document.getElementById("resultado").innerHTML = "<strong>Ordem dos Pares!</strong>";
	}else{
		document.getElementById("resultado").innerHTML = "<strong>Caos dos Impares!</strong>";
	}
}

function alistar(){
	let idade = document.getElementById("idade").value;
	
	if(idade<18){
		document.getElementById("").innerHTML = "Alistamento negado! Menor de idade.";
	}else{
		document.getElementById("").innerHTML = "Alistamento aprovado!"
	}
}
