//Switch 
document.write("</br>Escolha o seu pedido: </br></br>");
document.write("</br>1 = Cachorro Quente </br></br>");
document.write("</br>2 = Refrigerante </br></br>");
document.write("</br>3 = Hamburguer</br></br>");
document.write("</br>4 = Suco de Limão</br></br>");

function pedir(){

    x = prompt("o que deseja pedir? ");

    switch(x){

        case '1':
            alert("Seu pedido é Cachorro Quente! ");
            brake;
            
        case '2':
            alert ("Seu pedido é Refrigerante! ");
            brake;
        case '3':
            alert ("Seu pedido é Hamburguer! ");
            brake;

        case '4':
            alert ("Seu pedido é Suco de Limão! ");
            brake;
        default:
            alert("Ops. Não temos essa opção!");
            break;

    }
}