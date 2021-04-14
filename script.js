window.onload = function() {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(req => { document.getElementById('foto').innerHTML = "<img class='foto' src='"+req.message+"'>";}); 
} 

function preencherDados(dados) {
    document.getElementById('login').innerHTML = dados.login;
    document.getElementById('foto').innerHTML = "<img class='foto' src='"+dados.avatar_url+"'>";
    document.getElementById('qtdFol').innerHTML = dados.followers;
    document.getElementById('qtdSeg').innerHTML = dados.following;
}

function inserirSeguidores(dados) {
    document.getElementById('seguidores').innerHTML = '';
    dados.forEach(function(dado) {
        let li = document.createElement('li');
        li.innerHTML = dado.login;
        document.getElementById('seguidores').appendChild(li);
    })
}

function pegarDadosSeguidores() {
    /* /users/{username}/followers */
    let nome = document.getElementById('usuario').value;
    fetch('https://api.github.com/users/'+ nome +'/followers')
    .then(response => response.json())
    .then(dados => inserirSeguidores(dados))
}

async function pegarDadosGitHub() {
    let nome = document.getElementById('usuario').value;
    let response = await fetch('https://api.github.com/users/'+nome);
    let dados = await response.json()
    preencherDados(dados);
    pegarDadosSeguidores();
}