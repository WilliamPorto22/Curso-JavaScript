let nome = window.prompt('Escreva seu nome?  CONTAREI AS LETRAS')
document.write(`<h2> Ola, ${nome}! Seu nome tem ${nome.length} letras.</h2>`)
document.write(`<h2> Seu nome em Mausculas é ${nome.toUpperCase()} </h2>`)
document.write(`<h2> Seu nome em Minusculas é ${nome.toLowerCase()} </h2>`)


// Converter Numeros 

// Exemplos 

// let n1 = 1544

// n1.toFixed(2)

// n1.toFixed(2).reduce('.' , ',')


//  Convertor do numero para valor em real 

// n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'} )