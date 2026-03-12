
function tocar(){
	document.getElementById("musica").play();
	document.getElementById("descricao").style.display = "none";
	document.getElementById("texto").style.display = "block";
}
document.getElementById("iniciar").onclick = tocar();

function click(){
	let valor = document.getElementById("prompt").value;

	if(valor%2 == 0){
		document.getElementById("resultado").innerHTML = "Ordem dos Pares!"
	}else{ document.getElementById("resultado").innerHTML = "Caos dos Impares!"
	}
}


document.getElementById("analisar").onclick = click();