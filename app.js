function enviar(nome, text, color){
    nome = document.querySelector("#name").value
    text = document.querySelector("#text").value
    color = document.querySelector("#color").value
    
    caixa_messagem = document.createElement("div")
    caixa_messagem.classList.add("caixa_mensagem")
    nomes = "<div> <h3><strong>Nome:</strong> " + nome + "</h3> </div>"
    messagem = "<div><p>" + text + "</p></div>"
    caixa_messagem.innerHTML = nomes  + messagem
    divs = caixa_messagem.querySelectorAll("div")
    divs[0].classList.add("nome_user")
    divs[1].classList.add("messagem")

    caixa_messagem.style.backgroundColor = color

    document.querySelector(".grade").appendChild(caixa_messagem)
 
}