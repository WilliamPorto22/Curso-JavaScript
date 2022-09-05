function greet ()
{
    let name = document.querySelector('#name').value;
    alert('hello,' + name );
}

document.querySelector('form').addEventListener ('submit', greet);


let none = window.prompt('Qual é seu nome?')
window.alert('É um grande prazer te conhecer,' + none ) // contatenacao = + 