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

// Objeto
/* Um objeto é uma coleção de propriedades, e uma propriedade é uma associação entre um nome (ou chave) e um valor. Um valor de propriedade pode ser uma função, que é então consierada um método do objetivo. */

let pessoa = {
    nome: "Dani",
    idade: 32,
    filhos: true,
    nomeFilhos: ["Ori", "Nala"],
    carros: {
        camaro: {
            placa: "123456",
            cor: "amarelo"
        },
        uno: {
            placa: "654321",
            cor: "vermelho"
        }
    },
    andar: function(km){
        (pessoa.nome+" andou "+km+" km ")
    }
}

pessoa.andar(20)

/* Operadores:
Aritméticos
Atribuição
*/

let n1 = 8
let n2 = 5
let n3 = 7
let resultado = (n1+n2+n3)/3

console.log(resultado)

// x = x + y igual a x += y

let x = 2
let y = 1

console.log(x)

x--

console.log(x)


