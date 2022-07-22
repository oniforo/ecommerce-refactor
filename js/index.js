let ulCard = document.querySelector("#ulCard")
/* Variable data is loaded from database.js */
displayProducts(data)

let products = document.getElementsByClassName("linkCard")
let ulCarrinho = document.getElementById('corpoCarrinho')

let arrCarrinho = []

for (let product of products) {
    product.addEventListener("click", event => {
        cartAdd(event)
        atualizarCarrinho(arrCarrinho)    
    })
}

/* Creates and element with a given class */
function elementWithClass(element, className) {
    const elem = document.createElement(element)
    elem.classList.add(className)
    return elem
}

function displayProducts(data) {
    for (let product of data) {
        
        const li = elementWithClass('li', 'card')
        const img = elementWithClass('img', 'imgCard')
        const button = elementWithClass('button', 'categoria')
        const h2 = elementWithClass('h2', 'nomeProduto')
        const p = elementWithClass('p')
        const preco = elementWithClass('p', 'preco')
        const a = elementWithClass('a', 'linkCard')

        img.src = product.img
        button.innerText = product.tag
        h2.innerText = product.nameItem
        p.innerText = product.description
        preco.innerText = `R$ ${product.value}`
        a.innerText = product.addCart
        a.id = product.id

        li.append(img, button, h2, p, preco, a)
        ulCard.appendChild(li)

    }
}

function cartAdd(event) {

    const target = event.target
    const product = data[target.id]

    const li = elementWithClass('li', 'listaCarrinho')
    const img = elementWithClass('img', 'imgCarrinho')
    const div = elementWithClass('div', 'divCarrinho')
    const h3 = elementWithClass('h3')
    const p = elementWithClass('p', 'preçoCarrinho')
    const a = elementWithClass('a', 'remocao')

    img.src = product.img 
    h3.innerText = product.nameItem
    p.innerText = `R$ ${product.value}`
    
    a.innerText = 'Remover Produto'
    a.id = product.id
    a.addEventListener("click", removerCarrinho)

    div.append(h3, p, a)
    li.append(img, div)
    
    ulCarrinho.appendChild(li)
    arrCarrinho.push(product)
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
