// Function Exemplos

// Desobrir se o numero e Par ou Impar

let resultado = parimp()
let numeroinfirmado = 130

function parimp(numero){
    if(numero%2==0){
        return 'Par'
    }else{
        return 'Impar'
    }
}


console.log(` O Numero ${numeroinfirmado} é ${resultado}!!`)


// Acima feita por Willim 


// Somar 
let n1 = 2
let n2 = 8

function soma(parametros, parametros2) {
    return n1 + n2
}

console.log(soma( n1, n2))