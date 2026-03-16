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
	document.getElementById("voltar").style.display = "none";
	document.getElementById("texto4").style.display = "none";
	document.getElementById("texto5").style.display = "block";
	document.getElementById("fim").style.display = "block";
}

function fim(){
	document.getElementById("fim").style.display = "none";
	document.getElementById("texto5").style.display = "none";
	document.getElementById("texto6").style.display = "block";
	document.getElementById("cap3").style.display = "block";
}

function voltar(){
	document.getElementById("texto1").style.display = "block";
	document.getElementById("texto2").style.display = "none";
	document.getElementById("texto3").style.display = "none";
	document.getElementById("texto4").style.display = "none";
	document.getElementById("texto5").style.display = "none";
	
}

function sinal(){
	let res = [];
	for(i=0; i<10; i++){
		res[i] = i+1;
	}
	document.getElementById("resultado1").innerHTML = `${res}`;
	
}

function numer0(){
	let res2 = Number(document.getElementById("prompt1").value);
		
		if(res2==0){
			document.getElementById("botao1").style.display = "none";
			document.getElementById("resultado2").innerHTML = "Orbe de ecuta se calou!";
		}
		
		
		document.getElementById("resultado2").innerHTML = `${res2}`;
	
}