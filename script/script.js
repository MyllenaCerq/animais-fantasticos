// getElementById adiciona e retorna elementos do DOM 
console.log('> Tópico: document.getElementById')
const animaisSection = document.getElementById('#animais')
console.log(animaisSection)



// classe e tag
// selecionam e retornam uma >lista< de elementos do DOM. A lista é ao vivo, ou seja, atualização dinamica

// Seleciona pela classe, retorna uma HTMLCollection
console.log('> Tópico: document.getElementsByClassName')
const gridSelection = document.getElementsByClassName('grid-section')
console.log(gridSelection)

// selecionando duas tags 
const contato = document.getElementsByClassName('grid-section contato')
console.log(contato)

// selecionando todas as uls do meu site
const ul = document.getElementsByTagName('ul')
console.log(ul)

// retorna o primeiro elemento 
console.log(gridSelection[0])
// se eu quiser saber quantas sessões tem num site
console.log('Quantas sessões tem no site: '+ gridSelection.length)




// Seletor unico
// querySelector retorna o primeiro elemento que combinar com o seu seletor CSS
console.log('> Tópico: Seletor Unico')
// puxando classe
const animais = document.querySelector('.animais')
console.log(animais)

// puxando id, ou seja, #
const contatoID = document.querySelector('#contato')
console.log(contatoID)

// pegar o ultimo item de uma lista
const lastLink = document.querySelector('.animais-lista li:last-child')
console.log(lastLink)

// pegar todo atributo que tenha href ^ e que começar com...
const primeiroUl = document.querySelector('[href^="https://"]')
console.log(primeiroUl)

// primeiro ul
const firstUl = document.querySelector('ul')
console.log(firstUl)
// e nesse exemplo abaixo, eu posso pegar o primeiro li dentro do ul declarado acima
const navItem = firstUl.querySelector('li')
console.log(navItem)

// selecionar links internos no document
const linksInternos = document.querySelector('[href^= "#"]')
console.log("links internos " + linksInternos)


// Seletor Geral de lista 
// querySelectorAll retorna todos os elementos compativeis com o seletor CSS uma NodeList

// seleciona toda as sections
const allSections = document.querySelectorAll('.grid-section')
console.log(allSections)

// seleciona toda as uls
const allUl = document.querySelectorAll('ul')
console.log(allUl)

// seleciona toda as imagens
const allImgs = document.querySelectorAll('.animais-lista img')
console.log(allImgs)