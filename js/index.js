let ulCard = document.querySelector("#ulCard")
let arrCarrinho = []
function createCard (data) {
    for (let i=0; i<data.length; i++) {
        let liCard = document.createElement('li')
        let imgCard = document.createElement('img')
        let buttonCard = document.createElement('button')
        let h2Card = document.createElement('h2')
        let pCard = document.createElement('p')
        let precoCard = document.createElement('p')
        let linkCard = document.createElement('a')
        liCard.classList.add('card')
        imgCard.classList.add('imgCard')
        buttonCard.classList.add('categoria')
        h2Card.classList.add('nomeProduto')
        precoCard.classList.add('preco')
        linkCard.classList.add('linkCard')
        imgCard.src = data[i].img
        buttonCard.innerText = data[i].tag
        h2Card.innerText = data[i].nameItem
        pCard.innerText = data[i].description
        precoCard.innerText = `R$ ${data[i].value}`
        linkCard.innerText = data[i].addCart
        linkCard.id = data[i].id
        liCard.append(imgCard, buttonCard, h2Card, pCard, precoCard, linkCard)
        ulCard.appendChild(liCard)
        }
}
createCard (data)

let btnProdutos = document.getElementsByClassName("linkCard")
let ulCarrinho = document.getElementById('corpoCarrinho')
let btnCarrinho = document.getElementsByClassName('remocao')

function adicionarCarrinho(event){
    let btn = event.target
    let liCarrinho = document.createElement('li')
    let imgCarrinho = document.createElement('img')
    let divCarrinho = document.createElement('div')
    let h3Carrinho = document.createElement('h3')
    let pCarrinho = document.createElement('p')
    let aCarrinho = document.createElement('a')
    liCarrinho.classList.add('listaCarrinho')
    imgCarrinho.classList.add('imgCarrinho')
    divCarrinho.classList.add('divCarrinho')
    pCarrinho.classList.add('preçoCarrinho')
    aCarrinho.classList.add('remocao')
    imgCarrinho.src = data[btn.id].img 
    h3Carrinho.innerText = data[btn.id].nameItem
    pCarrinho.innerText = `R$ ${data[btn.id].value}`
    aCarrinho.innerText = 'Remover Produto'
    aCarrinho.id = data[btn.id].id
    divCarrinho.append(h3Carrinho, pCarrinho, aCarrinho)
    liCarrinho.append(imgCarrinho, divCarrinho)
    ulCarrinho.appendChild(liCarrinho)
    aCarrinho.addEventListener("click", removerCarrinho)
    arrCarrinho.push(data[btn.id])
    console.log(arrCarrinho)
}

function removerCarrinho(event) {
    event.path[2].remove()
    let btnRemover = event.target
    console.log(btnRemover.parentNode)
    console.log(btnRemover.id)
    arrCarrinho.splice(btnRemover.id, 1)
    ulCarrinho.innerHTML = ''
    for (let n=0; n<arrCarrinho.length; n++) {
        let liNovoCarrinho = document.createElement('li')
        let imgNovoCarrinho = document.createElement('img')
        let divNovoCarrinho = document.createElement('div')
        let h3NovoCarrinho = document.createElement('h3')
        let pNovoCarrinho = document.createElement('p')
        let aNovoCarrinho = document.createElement('a')
        liNovoCarrinho.classList.add('listaCarrinho')
        imgNovoCarrinho.classList.add('imgCarrinho')
        divNovoCarrinho.classList.add('divCarrinho')
        pNovoCarrinho.classList.add('preçoCarrinho')
        aNovoCarrinho.classList.add('remocao')
        imgNovoCarrinho.src = arrCarrinho[btnRemover.id-1].img 
        h3NovoCarrinho.innerText = arrCarrinho[btnRemover.id-1].nameItem
        pNovoCarrinho.innerText = `R$ ${arrCarrinho[btnRemover.id-1].value}`
        aNovoCarrinho.innerText = 'Remover Produto'
        aNovoCarrinho.id = arrCarrinho[btnRemover.id-1].id
        divNovoCarrinho.append(h3NovoCarrinho, pNovoCarrinho, aNovoCarrinho)
        liNovoCarrinho.append(imgNovoCarrinho, divNovoCarrinho)
        ulCarrinho.appendChild(liNovoCarrinho)
        aNovoCarrinho.addEventListener("click", removerCarrinho)
        
    }
    
}



for(let i = 0; i< btnProdutos.length; i++){
let btnComprar = btnProdutos[i]
btnComprar.addEventListener("click", funcao)
//btnComprar.addEventListener('click', atualizarCarrinho(arrCarrinho))
}

function funcao(evento) {
    adicionarCarrinho(evento)
    atualizarCarrinho(arrCarrinho)
}

function atualizarCarrinho (arrCarrinho) {

    let precos = document.querySelectorAll('.preçoCarrinho')
    let soma = 0
    let quantidade = arrCarrinho.length
    for (let j=0; j<arrCarrinho.length; j++) {
        soma += arrCarrinho[j].value
        
    }
    
    let valorQuantidade = document.querySelector('#valorQuantidade')
    let precoTotal = document.querySelector('#precoTotal')

    valorQuantidade.innerText = quantidade
    precoTotal.innerText = `R$ ${soma}`

    console.log(quantidade)
    console.log(soma)
    console.log(arrCarrinho)

   
}

