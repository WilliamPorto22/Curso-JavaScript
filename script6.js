function clicar() {
    let a = window.document.getElementById('area')
    a.innerText='Clicou!!'
    a.style.color='black'
}

let b = window.document.getElementById('area2')

function clicar2(){
    b.innerText = 'Clicou, Obrigado!!'
    b.style.backgroundColor='red'
}

function entrar(){
    b.innerText = 'VAIII Clica!'
    b.style.backgroundColor = '#33a333'
}

function sair(){
    b.innerText = 'AAAH SAIU!'
    b.style.backgroundColor = 'Blue'
}


// Agora vai ser tudo aqui abaixo sem nada no HTML so o Id

let c = window.document.getElementById('area3')
c.addEventListener('click', clicar3)
c.addEventListener('mouseenter', entrar3)
c.addEventListener('mouseout', sair3)

function clicar3(){
    c.innerText = 'Clicou, Obrigado!!'
    c.style.backgroundColor='red'
}

function entrar3(){
    c.innerText = 'Clica logoo Vai !'
    c.style.backgroundColor = '#00c4ff'
    c.style.color = 'black'
}

function sair3(){
    c.innerText = 'AAAH Volta logo!'
    c.style.backgroundColor = '#f500ff'
    c.style.borderRadius = '50px'
}
