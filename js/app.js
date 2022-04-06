var p = document.createElement("p")
p.innerHTML = "Oi gente"

var img = document.createElement("img")
img.src = "senhor-dos-aneis.jpg"

document.getElementById("conteudo").appendChild(p)
document.getElementById("conteudo").appendChild(img)

document.getElementById("conteudo").removeChild(img)