var lista = document.getElementsByTagName("ul")[1]
var itens = lista.children
var novoItem = document.createElement("li")
novoItem.textContent = "z"

lista.insertBefore(novoItem, itens[0])

var lista2 = document.getElementsByTagName("ul")[1]
var itens2 = lista2.children
var novoItem2 = document.createElement("li")
novoItem2.textContent = "y"

lista.replaceChild(novoItem2, itens2[2])

console.log(itens2)