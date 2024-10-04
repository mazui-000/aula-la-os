//////////////////////Exercicio de Escrita 1 

/* let quantidadePets = prompt(Number("Quantos bichinhos de estimação você tem?"));

if (quantidadePets === 0) {
    console.log("Que pena! Você pode adotar um pet!");
    
} else {
    var nomesPets = [];
    for (var i = 0; i < quantidadePets; i++) {
        var nome = prompt("Digite o nome do seu pet " + (i + 1) + ":");
        nomesPets.push(nome);
    }
    console.log("Os nomes dos seus pets são: " + nomesPets.join(", "));

console.log(nomesPets);
} */ 

//////////////////////Exercicio de Escrita 2 

let arrayOriginal = [54,34,39,23,90,21,17]
    for(let numero of arrayOriginal){
        console.log (numero)
    }
    

//divindo por 10
    function arrayzada (arrayOriginal) {
       for (let i = 0; i < arrayOriginal.length; i++) {
        console.log(arrayOriginal[i]/10)
    }
    }
console.log ("divididos por 10:")
    arrayzada(arrayOriginal)


    //buscando por pares
    function arrayPares (array) {
        let numerosPares = []; 
    for (let i=0; i < array.length;i++){
    if (array [i]%2===0){
        numerosPares.push(array[i]);
        }
    }
    console.log ("Numeros Pares:")
    console.log(numerosPares);
    }
    arrayPares(arrayOriginal)
    


    //D
    function novaArrayStrings (Array) {
    let newArray = [];
    for (let i = 0; i < arrayOriginal.length; i++){
        newArray.push(" O elemento do index "+ i + " é: " + arrayOriginal[i] );
    }
    console.log(newArray); 
    }
    novaArrayStrings(arrayOriginal)
