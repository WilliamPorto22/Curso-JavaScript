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
    res.innerHTML = `<p>Sua velocidade é de ${velocidade}Km/h</p><br>`
    if(velocidade > 100){
        res.innerHTML += `Voce esta MULTADO por exesso de Velocidade!!`
    }
    res.innerHTML += '<p>Dirija sempre com cinto de seguranca!</p>'

}


// So mais uns exemplos abaixo:


// let velocidade = 100
// console.log(`A velocidade do seu carro esta a ${velocidade}Km/h`)

// if (velocidade > 60 ) { // se a velocidade for maior que 60km voce sera multado
//     console.log ( `Voce ultrapassou a velocidade. AGORA FOI MULTADO`)
// } 

// else{ // esse resultado mostrara caso estaja dentro da velocidade
//     console.log('Dirija sempre com o cinto de segurança!')
// }

