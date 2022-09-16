// if e else simples 
let idade = 22
if(idade < 18){
    console.log('Menor de idade')
}else{
    console.log('Maior de idade')
}

// exemplo de algumas condicoes uma dentro de outra 

let idadevota = 26
console.log(`Voce tem ${idadevota} anos.`)
if(idadevota < 16){
    console.log('Nao vota')
}else{
    if (idadevota <18){
        console.log('Voto opcional')
    } else {
            console.log('Voto Obrigatorio')
        
    }
}