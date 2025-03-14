const ini = document.getElementById('ini');
const sob = document.getElementById('sob');
const tec = document.getElementById('tec');
const con = document.getElementById('con');
const pro = document.getElementById('pro');
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

pro.addEventListener('mouseenter', entrar7);
pro.addEventListener('mouseout', sair7);

insta.addEventListener('mouseenter', entrar5);
insta.addEventListener('mouseout', sair5);

git.addEventListener('mouseenter', entrar6);
git.addEventListener('mouseout', sair6);

function entrar() {
    ini.style.background = '#fc993669'
}

function sair() {
    ini.style.background = 'rgba(230, 207, 2, 0)'
}

function entrar2() {
    sob.style.background = '#fc993669'
}

function sair2() {
    sob.style.background = 'rgba(230, 207, 2, 0)'
}

function entrar3() {
    tec.style.background = '#fc993669'
}

function sair3() {
    tec.style.background = 'rgba(230, 207, 2, 0)'
}

function entrar4() {
    con.style.background = '#fc993669'
}

function sair4() {
    con.style.background = 'rgba(230, 207, 2, 0)'
}

function entrar5() {
    insta.style.background = '#fc993669'
}

function sair5() {
    insta.style.background = "linear-gradient(180deg, #EFBF04, #fc9936a3)";
}

function entrar6() {
    git.style.background = '#fc993669'
}

function sair6() {
    git.style.background = "linear-gradient(180deg, #EFBF04, #fc9936a3)"
}

function entrar7() {
    pro.style.background = '#fc993669'
}

function sair7() {
    pro.style.background = 'rgba(230, 207, 2, 0)'
}
