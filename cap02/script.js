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
	document.getElementById("fim").style.display = "block";
}

function missao4(){
	document.getElementById("voltar").style.display = "none";
	document.getElementById("texto4").style.display = "none";
	document.getElementById("texto5").style.display = "block";
	
}

function fim(){
	document.getElementById("fim").style.display = "none";
	document.getElementById("texto4").style.display = "none";
	document.getElementById("texto5").style.display = "block";
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
	let res = document.getElementById("resultado1");
	
	for(i=1; i<=10; i++){
		res.innerHTML += i + "<br>"	;
	}
	
}

function numer0(){
	let res2 = Number(document.getElementById("prompt1").value);
		
		if(res2==0){
			document.getElementById("botao1").style.display = "none";
			document.getElementById("resultado2").innerHTML = "Orbe de ecuta se calou!";
		}else{
			document.getElementById("resultado2").innerHTML = `${res2}`;
		}
}

function ChuvaDeRunas(){
	let res3 = document.getElementById("resultado3");
	
	for(i=0; i<=20; i++){
		if(i%2 == 0){
			res3.innerHTML += i + '<br>';
		}
	}
}