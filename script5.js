let paragra1 = window.document.getElementsByTagName('p')[0]  // [ 0 ] isso siguinifica a primeira teg [ 1 ] isso e a segunda seg 
window.document.write(paragra1.innerText)

//  este comando acima altera a teg

let  d = window.document.getElementsById('p-exemplo')

d.style.background = 'green'
d.innerText = 'Estou aguardando o William ganhar'


let will = window.document.querySelector('p.p-exemplo') [0]
will.style.background = '#ffffff'

window.document.write('William vai ser o mais rico do mundo')

let corpo = window.document.body;