// Exemplos de Array  (  let nomeDaVariavel = [2,3,4]) 

// lembrando que o Array é o que esta dentro de []  se dentro [ estiver 10 itens comesarao a ser contados do 0 ]
// se nao entendeu mais um exemplo  ( qual é o item 9 do Array de 1 a 10 ?  a resposta e 10 )

let vaga = [2,5,6]

let possicao = vaga.indexOf(6) // este comando e para achar em qual possicao esta o item dentro do ()
console.log(`O Valor 6 esta na Posiçao ${possicao}`)


vaga [3] = 9 // deste modo acresenta  o numero 6 na possiçao 3  ( lembrando que 2 = 0 - lembrando que 2 esta na possicao 0)
vaga.push = 7  // este comando acresenta o item na ultima possicao do array 
vaga.length  //  este metodo e para contar quantos elementos tem dentro do array
vaga.sort() // este comando vai colocar todos elementos em ordem cresente

console.log(vaga)

console.log(`o Array tem ${vaga.length} Posiçoes`)

console.log(`o Primeiro valor do Array é ${vaga[0]}`)

for ( let pos = 0 ; pos < vaga.length ; pos++ ){
    console.log(`A possiçao do Array é ${pos} e seu valor é ${vaga[pos]}`)
}

for(let pos2 in vaga){
    console.log(`A possiçao ${pos2} e seu valor é ${vaga[pos2]}`)
}