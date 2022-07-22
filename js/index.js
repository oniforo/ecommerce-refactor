let ulCard = document.querySelector("#ulCard")
/* Variable data is loaded from database.js */
displayProducts(data)

let products = document.getElementsByClassName("linkCard")
let ulCarrinho = document.getElementById('corpoCarrinho')

let arrCarrinho = []

for (let product of products) {
    product.addEventListener("click", event => {
        cartAdd(event)
        /* atualizarCarrinho()   */  
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
    a.addEventListener("click", cartDelete)

    div.append(h3, p, a)
    li.append(img, div)
    
    ulCarrinho.appendChild(li)
    arrCarrinho.push(product.value)
    console.log(arrCarrinho)

    atualizarCarrinho()

}

function cartDelete(event) {

    const target = event.target
    const index = Array.from(ulCarrinho.children).indexOf(target.closest("li"))

    target.closest('li').remove()
    arrCarrinho.splice(index, 1)

    atualizarCarrinho()
}

function atualizarCarrinho() {
    
    const func = (partial, a) => partial + a
    const soma = arrCarrinho.reduce(func, 0);

    let quant = document.querySelector('#valorQuantidade')
    let preco = document.querySelector('#precoTotal')

    quant.innerText = arrCarrinho.length
    preco.innerText = `R$ ${soma}`

}
