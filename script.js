
function verificarPar(numero) {
    if (numero% 2 === 0 ) {
        console.log( "O número é par" );
    } else {
        console.log("O número é ímpar" );
    }
}

verificarPar(100)

function calcular(num1, num2) {

    console.log(num1 + num2)
    console.log(num1 * num2)
    console.log(num2 % num1)
    console.log(num2 - num1)
}
calcular(1,2)

//ex5
function contaLetras(str){
    str.length = 5;
    console.log(str);
    console.log(str + " tem " + str.length + " letras.");
}
contaLetras(prompt("Digite uma palavra: "));

//ex3
function contagemRegressiva() {
    for(let n = 10; n>=1; n--){
        console.log(n);
    }
}
contagemRegressiva();

//ex6
let carro = {
    marca: "Chevrolet",
    modelo: "Onix",
    ano: 2022  
}
console.log(carro.modelo);
