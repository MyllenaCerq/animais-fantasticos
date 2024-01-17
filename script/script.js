// getElementById adiciona e retorna elementos do DOM 
// console.log('> Tópico: document.getElementById')
// const animaisSection = document.getElementById('animais')
// console.log(animaisSection)



// classe e tag
// selecionam e retornam uma >lista< de elementos do DOM. A lista é ao vivo, ou seja, atualização dinamica

// Seleciona pela classe, retorna uma HTMLCollection
// console.log('> Tópico: document.getElementsByClassName')
// const gridSelection = document.getElementsByClassName('grid-section')
// console.log(gridSelection)

// selecionando duas tags 
// const contato = document.getElementsByClassName('grid-section contato')
// console.log(contato)

// selecionando todas as uls do meu site
// const ul = document.getElementsByTagName('ul')
// console.log(ul)

// retorna o primeiro elemento 
//console.log(gridSelection[0])
// se eu quiser saber quantas sessões tem num site
//console.log('Quantas sessões tem no site: '+ gridSelection.length)




// Seletor unico
// querySelector retorna o primeiro elemento que combinar com o seu seletor CSS
//console.log('> Tópico: Seletor Unico')
// puxando classe
//const animais = document.querySelector('.animais')
//console.log(animais)

// puxando id, ou seja, #
//const contatoID = document.querySelector('#contato')
//console.log(contatoID)

// pegar o ultimo item de uma lista
//const lastLink = document.querySelector('.animais-lista li:last-child')
//console.log(lastLink)

// pegar todo atributo que tenha href ^ e que começar com...
//const primeiroUl = document.querySelector('[href^="https://"]')
//console.log(primeiroUl)

// primeiro ul
//const firstUl = document.querySelector('ul')
//console.log(firstUl)
// e nesse exemplo abaixo, eu posso pegar o primeiro li dentro do ul declarado acima
//const navItem = firstUl.querySelector('li')
//console.log(navItem)

// selecionar links internos no document
//const linksInternos = document.querySelector('[href^= "#"]')
//console.log("links internos " + linksInternos)


// Seletor Geral de lista 
// querySelectorAll retorna todos os elementos compativeis com o seletor CSS uma NodeList

// seleciona toda as sections
//const allSections = document.querySelectorAll('.grid-section')
//console.log(allSections)

// seleciona toda as uls
//const allUl = document.querySelectorAll('ul')
//console.log(allUl)

// seleciona toda as imagens
//const allImgs = document.querySelectorAll('.animais-lista img')
//console.log(allImgs)




// EXERCICIOS 0303 Seleção de Elementos 2

// Retorne no console todas as imagens do site ------ R: ele usou o querySelectorAll
const allImage = document.getElementsByTagName('img')
console.log(allImage)

// ERREI Retorne no console apenas as imagens que começaram com a palavra imagem ----- R: querySelectorAll('img[src^= "imagem"]')
// como eu fiz 
const imageName = document.querySelectorAll('[href^="imagem"]')
console.log(imageName)

// como ele fez
const imagens = document.querySelectorAll('[src^="img/imagem"]')
console.log(imagens)

// Selecione todos os links internos (onde o href começa com #)
const allLinks2 = document.querySelectorAll('[href^="#"]')
console.log(allLinks2)

// Selecione o primeiro h2 dentro de .animais-descricao
//como eu fiz
const animalSection = document.querySelector('.animais-descricao')
const firstH2 = animalSection.querySelector('h2')
console.log(firstH2)

//como ele fez
const animaisH2 = document.querySelector('.animais-descricao h2')
console.log(animaisH2)

// Selecione o último p do site
//como eu fiz (ERRADO)
const lastP = document.querySelector('p:last-child')
console.log(lastP)

//como ele fez (CERTO)
const paragrafos = document.querySelectorAll('p')
console.log(paragrafos[paragrafos.length - 1])