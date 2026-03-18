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

function fim(){
	document.getElementById("voltar").style.display = "none";
	document.getElementById("fim").style.display = "none";
	document.getElementById("texto4").style.display = "none";
	document.getElementById("texto5").style.display = "block";
	document.getElementById("cap3").style.display = "block";
	document.getElementById("musica").play();
	
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

let hpTroll = 100;
let hpAlex = 90;
let hpMeri = 70; 
let hpSelene = 60;
let danoTroll = document.getElementById("danoTroll");

function batalha(){
	//aqui calcula o dano de cada personagem
	
	let alexAtk = Math.floor(Math.random()*(20-1 + 1)+1);
	let meriAtk = Math.floor(Math.random()*(12-1 + 1)+1);
	let seleneAtk = Math.floor(Math.random()*(8-1 + 1)+1);
	let trollAtk = Math.floor(Math.random()*(20-1 + 1)+1);
	
	//aqui calcula o dano recebido
	
	hpTroll -= alexAtk;
	hpTroll -= meriAtk;
	hpTroll -= seleneAtk;
	
	let troll = Math.floor(Math.random()*(4-1 + 1)+1);
	
	if(troll==1){
		hpAlex -= trollAtk;
		danoTroll.innerHTML = `Troll ataca Alex: Dano: ${trollAtk}`;
		
	}else if(troll==2){
		hpMeri -= trollAtk;
		danoTroll.innerHTML = `Troll ataca Meri: Dano: ${trollAtk}`;
		
	}else if(troll==3){
		hpSelene -= trollAtk;
		danoTroll.innerHTML = `Troll ataca Selene: Dano: ${trollAtk}`;
		
	}else if(troll==4){
		hpAlex -= trollAtk;
		hpMeri -= trollAtk;
		hpSelene -= trollAtk;
		danoTroll.innerHTML = `Troll ataca todos: Dano: ${trollAtk}`;
		
	}
	
	document.getElementById("HpTroll").innerHTML = hpTroll;
	document.getElementById("HpAlex").innerHTML = hpAlex;
	document.getElementById("HpMeri").innerHTML = hpMeri;
	document.getElementById("HpSelene").innerHTML = hpSelene;
	
	if(hpTroll<=0){
		document.getElementById("vs").style.display = "none";
		document.getElementById("final").style.display = "block";
	}
	
	document.getElementById("teste").innerHTML = `Alex ATK: ${alexAtk} <br>Meri ATK: ${meriAtk} <br>Selene ATK: ${seleneAtk}`;
}
