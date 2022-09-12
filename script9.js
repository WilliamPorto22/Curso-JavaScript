// exemplo de validasao se é brasileiro

// let pais = 'Franca'

// console.log(`Voce mora no ${pais}?`)
// if (pais == 'Brasil'){
//     console.log( `Entao voce é Brasileiro!! `)
// }else {
//     console.log( `Ata voce é Estrangeiro`)
// }




function calcular(){
    // let pegaoValorInput = window.document.getElementById('vel')  essa é uma das opçoes 
    // let pegaoValorInput = window.document.querySelector('input#vel')  essa é outa opcao  
//('digita o nome da teg depois coloca . se for class ou coloca # se for id depois coloca o seu nome')

    let pegaoValorInput = window.document.querySelector('input#vel')
    let res = window.document.getElementById('res')
    let velocidade = Number(pegaoValorInput.value)
    res.innerHTML = `Sua velocidade é de ${velocidade}Km/h`

}