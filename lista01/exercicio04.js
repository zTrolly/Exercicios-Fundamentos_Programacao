/**Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.
 */

function nomeMes(numero){
  if(numero == 1){
    return "janeiro";
  }else if(numero == 2){
    return "fevereiro";
  }else if(numero == 3){
    return "março";
  }else if(numero == 4){
    return "abril";
  }else if(numero == 5){
    return "maio";
  }else if(numero == 6){
    return "junho";
  }else if(numero == 7){
    return "julho";
  }else if(numero == 8){
    return "agosto";
  }else if(numero == 9){
    return "setembro";
  }else if(numero == 10){
    return "outubro";
  }else if(numero == 11){
    return "novembro";
  }else if(numero == 12){
    return "dezembro";
  }else{
    return "mês inválido";
  }
}



console.log(nomeMes(3));