const texto = "sou estudante de programação."
const ini = document.getElementById('ini');
const sob = document.getElementById('sob');
const tec = document.getElementById('tec');
const con = document.getElementById('con');
const insta = document.getElementById('insta');
const git = document.getElementById('git');

ini.addEventListener('mouseenter', entrar);
ini.addEventListener('mouseout', sair);

sob.addEventListener('mouseenter', entrar2);
sob.addEventListener('mouseout', sair2);

tec.addEventListener('mouseenter', entrar3);
tec.addEventListener('mouseout', sair3);

con.addEventListener('mouseenter', entrar4);
con.addEventListener('mouseout', sair4);

insta.addEventListener('mouseenter', entrar5);
insta.addEventListener('mouseout', sair5);

git.addEventListener('mouseenter', entrar6);
git.addEventListener('mouseout', sair6);

function entrar() {
    ini.style.background = 'rgba(230, 207, 2, 0.9)'
}

function sair() {
    ini.style.background = 'rgba(230, 207, 2, 0)'
}

function entrar2() {
    sob.style.background = 'rgba(230, 207, 2, 0.9)'
}

function sair2() {
    sob.style.background = 'rgba(230, 207, 2, 0)'
}

function entrar3() {
    tec.style.background = 'rgba(230, 207, 2, 0.9)'
}

function sair3() {
    tec.style.background = 'rgba(230, 207, 2, 0)'
}

function entrar4() {
    con.style.background = 'rgba(230, 207, 2, 0.9)'
}

function sair4() {
    con.style.background = 'rgba(230, 207, 2, 0)'
}

function entrar5() {
    insta.style.background = 'rgba(230, 207, 2, 0.2)'
}

function sair5() {
    insta.style.background = 'rgba(230, 207, 2, 1)'
}

function entrar6() {
    git.style.background = 'rgba(230, 207, 2, 0.2)'
}

function sair6() {
    git.style.background = 'rgba(230, 207, 2, 1)'
}

let cont = 0;
function animacao() {

    if (cont < texto.length) {
        document.getElementById('animacao').innerHTML += texto.charAt(cont);
        cont++;
        setTimeout(animacao, 60);
    } else {
        setTimeout(() => {
            document.getElementById('animacao').innerHTML = "";
            cont = 0
            animacao();
        }, 500);
    }
};

animacao();