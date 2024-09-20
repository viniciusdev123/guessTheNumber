let computerNumber
let userNumbers = []
let attempts = 0
maxguesses = 10

function newGame() {
    window.location.reload() //vai recarregar minha página web.
}

function init() {
    computerNumber = Math.floor(Math.random() * 100 + 1) // desta forma o programa vai contar de 0 à 100. / Math.floor vai evitar as dizímas periódicas. Ou seja, ele vai gerar um número randomico e vai arredondas este número porcausa do Math.floor().
    console.log(computerNumber)
}

function compareNumbers() {
    const userNumber = Number(document.getElementById('inputBox').value) //quero pegar o valor que é digitado no inputBox. O número virá da página e será armazenado dentro da variável userNumber.
    userNumbers.push(' ' + userNumber) //o push vem de puxar. Ou seja, 'puxe o valor de quem, qual variável?'. Desta forma vou armazenar os dados de userNumber dentro da minha Array userNumbers.
    document.getElementById('guesses').innerHTML = userNumbers // vai retornar para a minha página HTML os números que foi digitados, ou seja, dentro da minha array.

    if(attempts < maxguesses) {
        if (userNumber > computerNumber)  {
            document.getElementById('textOutput').innerHTML = 'You number is too high'
            document.getElementById('inputBox').value = '' //Ele vai pegar o valor que o usuário digitou e em seguida vai limpar (a string vazia siginifica justamente isso.).
            attempts++ //toda vez que esse if for executado, vou adicionar +1 à variável.
            document.getElementById('attempts').innerHTML = attempts
        }
        else if (userNumber < computerNumber){
            document.getElementById('textOutput').innerHTML = 'You number is too low'
            document.getElementById('inputBox').value = ''
            attempts++ 
            document.getElementById('attempts').innerHTML = attempts
        }
    
        else {
            document.getElementById('textOutput').innerHTML = 'Congratulations!!!'
            attempts++ 
            document.getElementById('attempts').innerHTML = attempts
            document.getElementById('inputBox').setAttribute('Readonly', 'Readonly') //setAttribute() Adiciona um novo atributo ou modifica o valor de um atributo existente num elemento específico. O 'Readoly' vai permitir somente leitura, ou seja, quando o número de tentativas acabar, o usuário não vai poder digitar mais nada. 
        }
    
    }
    else {
        document.getElementById('textOutput').innerHTML = 'You Lose! The computer number was: ' + computerNumber
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly') //o método setAttribute 

    }

}