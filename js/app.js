// Tipos de dados

// string
var nome = "Maria"
// number
var idade = 50
// boolean
var solteira = true

// array (tipo especial de objeto)
var frutas = ["vermelho", "azul", "preto"]

// object
var carro = new Object()
carro.fabricacao = "2025"
carro.cor = "azul"

// function
var soma = function(a, b) {return a+b}

// Variáveis
// escopo global, escopo local
// var (escopo global), let (dentro do bloco), const

const nome1 = "Flávia"

// Array: Estrutura de dados que armazena uma coleção de elementos
// No array só tem o valor, no objeto tem índice e valor

let meuArray = [
    "dia",
    "noite",
    "24",
    "1 dia",
    {oi: "olá"},
    ["pão", "ovo"]
]

console.log(meuArray[5][0])