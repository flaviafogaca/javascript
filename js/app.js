// Tipos de dados

// string
var nome = "Maria"
// number
var idade = 13
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
    idade: 13,
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

// x = x + y igual a x += y

let x = 2
let y = 1

x--

// Operador de comparação. Ex: "!=", "<", ">=", "==="

let media = 5
let frequencia = 80

console.log(media >=7 || frequencia >= 80)

let eleitor = (idade >= 16) ? "pode votar" : "Não pode votar"

let eleitor2 = !(idade <= 15) ? "pode votar" : "Não pode votar"

/* Condicionais:
If
Else
ElseIf
Switch
*/

/* let pais = "xxx"
let estado = "ba"

switch(pais){
    case 'brasil':
        console.log("Sim, Brasil")
        break
    case 'canada':
        console.log("Opa, Canadá")
        break
    default:
        console.log("Não encontrado")
        break
}
*/

/* if (pais == "canada") {
    console.log("Sou brasileira")
} else if (estado == "ba") {
    console.log("Sou baiano")
}
else {
    console.log("Sou gringo")
}
*/

// Loop: For e while

/* let paises = document.getElementsByClassName('pais')
let i = 0 
*/

/* for (let i = 0; i < paises.length; i++) {
    console.log(paises[i].innerHTML)
}
*/

/* do {
    console.log(paises[i].innerHTML)
    i++
}

while(i < paises.length)
*/

// LOOPS: for in e for of

/* let fruta = {nome:"Banana", preco: 9.99, unidade:1}
let aparelhos = ["Celular", "Fone de ouvido", "Microfone", "Mouse"]

for (let valor in fruta) {
    console.log(fruta[valor])
}
*/

/*for (let valor of aparelhos) {
    console.log(valor)
}
*/

// FUNÇÕES

/* function exibirAlert() {
    alert("Funcionou!")
}

exibirAlert()

function soma(x, y){
    return x + y
}
*/

// console.log(soma(2, 3))

/* document.getElementById("resultado").innerHTML = soma(3, 6)
*/

// ALERT, PROMPT E CONFIRM

// alert("Alerta!! Vc foi alertado!")

// prompt("Digite um número")

/* let numero = prompt("Digite um número")
alert(numero)
*/

/* console.log(confirm("Tem certeza que deseja excluir?"))
*/

let resposta = confirm("Tem certeza que deseja continuar?")

if(resposta == true) {
    alert("Item excluido com sucesso!")
} else {
    alert("Exclusão cancelada!")
}