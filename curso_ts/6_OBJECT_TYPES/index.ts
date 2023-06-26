// Object type para função com interface
interface Product {
    name: string
    price: number
    isAvailable: string
}
function showProductDetails(product: Product) {
    var produtoIndisponivel = product.isAvailable
    if(produtoIndisponivel === 'false'){
        produtoIndisponivel = 'Indisponivel'
        console.log(`Produto: ${product.name}, Preço: ${product.price}, Disponibilidade: ${produtoIndisponivel}`)
    } else {
        produtoIndisponivel = 'Disponivel'
        console.log(`Produto: ${product.name}, Preço: ${product.price}, Disponibilidade: ${produtoIndisponivel}`)
    }
}
const shirt:Product = {
    name: 'Camisa',
    price: 19.99,
    isAvailable: 'false'
}
showProductDetails(shirt)
showProductDetails({name: 'Calça', price: 23.99, isAvailable: 'true'})

// Interface com propriedade opcional
interface User {
    email: string
    fone?: number
}
function showUserDetails(user: User) {
    console.log(`Login: ${user.email}`)
    if(user.fone) {
        console.log(`Fone: ${user.fone}`)
    }
}
showUserDetails({email: 'italo@gmail.com', fone: 7109999999})
showUserDetails({email: 'italo@gmail.com'})

// Readonly
interface Car {
    brand: string
    readonly wheels: number
}
const fusca:Car = {
    brand: 'VW',
    wheels: 4
}
console.log(fusca)
// fusca.wheels = 5

// Index signature
interface CoordObject {
    [index: string]: number
}
let coords: CoordObject = {
    x: 10
}
coords.y = 15
console.log(coords)
console.log(typeof coords.x)

// Extending interfaces
interface Human {
    name: string
    age: number
}
interface SuperHuman extends Human {
    superPowers: string[]
}
const italo: Human = {
    name: 'Italo',
    age: 23
}
const brida: SuperHuman = {
    name: 'Brida',
    age: 1,
    superPowers: ['Morder', 'Caçar']
}
console.log(brida)

// Intersection types
interface Character {
    name: string
}
interface Gun {
    type: string
    caliber: number
}
type HumanWithGun = Character & Gun
const arnold: HumanWithGun = {
    name: 'Arnold',
    type: 'Short',
    caliber: 12
}
console.log(arnold)
console.log(arnold.caliber)

// ReadOnlyArray
let array: ReadonlyArray<string> = ['Maçã', 'Banana']
array.forEach((item) => {
    console.log(`Fruta: ${item}`)
})

// Tuplas
type fiveNumbers = [number, number, number, number, number]
const myNumberArray: fiveNumbers = [1,2,3,4,5]
const myNumberArray2: fiveNumbers = [1,2,3,4,5]
console.log(myNumberArray)

type nameAndAge = [string, number]
const anotherUser: nameAndAge = ['Italo', 23]
console.log(anotherUser)

// Tuplas com readonly
function showNumber(numbers: readonly [number, number]){
    console.log(numbers[0])
    console.log(numbers[1])
}
showNumber([1, 2])