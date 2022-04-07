console.log(
    document.body.childNodes
)

var lista = document.body.childNodes
alert(lista[5].childNodes[3].childNodes[0].nodeValue)

//Se nodeType retorna 1:nó de elemento; se 2: nó de atributo; se 3:nó de texto; se 8: nó de comentário//
