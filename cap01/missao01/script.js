
function proximo(){
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
		document.getElementById("resultado").innerHTML = "Ordem dos Pares!";
	}else{
		document.getElementById("resultado").innerHTML = "Caos dos Impares!";
	}
}


