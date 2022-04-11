var lista = document.getElementsByTagName("ul")[0]
var itens = lista.children

var novoItem = document.createElement("li")
novoItem.textContent = "z"

lista.insertBefore(novoItem, itens[0])

console.log(itens)