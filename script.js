// função entrar 

function entrar(){

    var area = document.getElementById("area"); 
    var texto = prompt('Digite seu nome');

    if (texto == '' || texto == null){
        alert('Digite seu nome novamente!');
        area.innerHTML = 'Bem vindo... ' + texto;
    } else {
        area.innerHTML = 'Bem vindo! ' + texto;
    }

    area.innerHTML = 'Bem vindo ' + texto;

}

function entrar2(nome){

    var area = document.getElementById('area2'); 
    var texto = prompt('Digite seu sobrenome');
    area.innerHTML = nome + ' ' + texto;

}