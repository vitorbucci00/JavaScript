/*
//ex1

function verificarPar(numero) {
    if (numero% 2 === 0 ) {
        console.log( "O número é par" );
    } else {
        console.log("O número é ímpar" );
    }
}

verificarPar(100)

//ex2
function calcular(num1, num2) {

    console.log(num1 + num2)
    console.log(num1 * num2)
    console.log(num2 % num1)
    console.log(num2 - num1)
}
calcular(1,2)

//ex3
function contagemRegressiva() {
    for(let n = 10; n>=1; n--){
        console.log(n);
    }
}
contagemRegressiva();

//ex4
function invertertexto(str){
    str = str.split("");
    str = str.reverse();
    str = str.join(""); 
    console.log(str);
}
invertertexto(prompt("Digite uma palavra: "));



//ex5

function contaLetras(str){
    str.length = 5;
    console.log(str);
    console.log(str + " tem " + str.length + " letras.");
}
contaLetras(prompt("Digite mais uma palavra: "));


//ex6
let carro = {
    marca: "Chevrolet",
    modelo: "Onix",
    ano: 2022  
}
console.log(carro.modelo);



//ex7

function mensgemPerso(nome, mensagem="olá "){
    console.log(mensagem + nome);

}

mensgemPerso(prompt("Qual o seu nome? "));





/////////////////////////////////// Ex8

function mediaArit(n1, n2, n3){
    console.log((Number(n1) + Number(n2) + Number(n3)) /3);
    
    
}

mediaArit(prompt("n1:"), prompt("n2:"), prompt("n3:"));



//Ex9

for(let n = 1; n <= 20; n++){
    if( n % 3 === 0) {
        console.log(n + ": Múltiplo de 3");
    } else {
        console.log(n + ": Não é múltiplo de 3");
        
    }
}


//ex10
function verificarPalin(str) {
    let separaString = str.split("");
    let inverteArray = separaString.reverse();
    let juntaArray = inverteArray.join("");
    return alert(str === juntaArray);
}
let str1 = prompt("Digite uma palavra, se for um palíndromo retornará true.");
verificarPalin(str1);

//ex11
function verificarSinal(num) {
    if (num = 0) {
        console.log("Seu número é 0");
    } else if (num>0){
        console.log("Seu número é maior que zero.")
    } else {
        console.log("Seu número é menor que zero.")
    }
}
verificarSinal(prompt("Digite um número: "));


///ex013

let n = 0
let soma = 0
while(n < 100) {
    n++;
    soma = soma + n;
}
console.log(soma);



//ex14
function substituirPalavra(text){
    console.log(text.replace(/azul/g, "vermelho"));
}

let texto = prompt("Digite o texto: ");
substituirPalavra(texto)

//ex20
let palavra = prompt("Digite uma palavra");

function contarVogais(palavra){
    const vogais = "aeiouAEIOU";
    let contador = 0; 

    for (let letra of palavra){
        if(vogais.includes(letra)){
            contador ++;
        }
    }
    console.log(contador);
 }
 contarVogais(palavra)
*/


