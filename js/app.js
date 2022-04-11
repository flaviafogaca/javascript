var lista = document.getElementsByTagName("ul")[1]
var itens = lista.children

var novoItem = document.createElement("li")
novoItem.textContent = "z"

lista.insertBefore(novoItem, itens[0])

console.log(itens)