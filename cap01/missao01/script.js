function missao1(){
	document.getElementById("texto1").style.display = "none";
	document.getElementById("texto2").style.display = "block";
}

function voltar(){
	document.getElementById("texto1").style.display = "block";
	document.getElementById("texto2").style.display = "none";
	
}

function analise(){
	let valor = document.getElementById("prompt").value;
	
	if(valor%2 == 0){
		document.getElementById("resultado").innerHTML = "<strong>Ordem dos Pares!</strong>";
	}else{
		document.getElementById("resultado").innerHTML = "<strong>Caos dos Impares!</strong>";
	}
}


