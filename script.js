window.onload = function() {

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

function pegarDadosGitHub() {
    let nome = document.getElementById('usuario').value;
    fetch('https://api.github.com/users/'+nome)
    .then(response => response.json())
    .then(dados => preencherDados(dados))

    pegarDadosSeguidores();
}

/*{login: "ramonbhb", id: 6562366, node_id: "MDQ6VXNlcjY1NjIzNjY=", avatar_url: "https://avatars.githubusercontent.com/u/6562366?v=4", gravatar_id: "", …}
avatar_url: "https://avatars.githubusercontent.com/u/6562366?v=4"
bio: null
blog: ""
company: null
created_at: "2014-02-01T16:39:24Z"
email: null
events_url: "https://api.github.com/users/ramonbhb/events{/privacy}"
followers: 20
followers_url: "https://api.github.com/users/ramonbhb/followers"
following: 1
following_url: "https://api.github.com/users/ramonbhb/following{/other_user}"
gists_url: "https://api.github.com/users/ramonbhb/gists{/gist_id}"
gravatar_id: ""
hireable: null
html_url: "https://github.com/ramonbhb"
id: 6562366
location: null
login: "ramonbhb"
name: null
node_id: "MDQ6VXNlcjY1NjIzNjY="
organizations_url: "https://api.github.com/users/ramonbhb/orgs"
public_gists: 1
public_repos: 38
received_events_url: "https://api.github.com/users/ramonbhb/received_events"
repos_url: "https://api.github.com/users/ramonbhb/repos"
site_admin: false
starred_url: "https://api.github.com/users/ramonbhb/starred{/owner}{/repo}"
subscriptions_url: "https://api.github.com/users/ramonbhb/subscriptions"
twitter_username: null
type: "User"
updated_at: "2021-04-13T21:32:32Z"
url: "https://api.github.com/users/ramonbhb"*/