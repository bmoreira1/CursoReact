
/*
function cadastroPessoa(info){ -->
    let novosDados = {
        ...info,
        cargo: 'programador',
        status: 1,
        codigo:202102191051
    }

    return novosDados;

}
console.log(cadastroPessoa({nome: 'Bruno', sobrenome: 'Barbosa', anoInicio: 2022}));*/


function cadastrar(usuarios, ...novosUsuarios){

    let totalusuarios = [
        ...usuarios,
        ...novosUsuarios
    ];
    return console.log(totalusuarios);

}

let usuarios = ["Bruno", "Estefany"];

let novosUsuarios = cadastrar(usuarios, "Jessica", "Bia");