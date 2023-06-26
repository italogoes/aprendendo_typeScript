# Aprendendo TypeScript
## Essa é uma documentação de tudo que aprendi no curso de typeScript

## 1. Array

``let numeros: number[] = [1,2,3]``<br>
``numeros.push(5)``<br>
### Outra sintaxe<br>
``const nums: Array<number> = [10, 23]``

## 2. Parametros tipados

``function soma(a: number, b: number){ return a + b } console.log(soma(10, 20))``

## 3. Retorno de função

``
function soma2(a: number, b: number): number{ return a + b } console.log(soma2(10, 20))
``

## 4. Função anonima

``setTimeout(() => {
    const salary: number = 1000
}, 2000);``

## 5. Tipos de objeto

``function passCordinates(cord: {x: number, y: number}){
    console.log('x cordinates: ' + cord.x)
}``<br>
``const objCord = {x: 329, y: 234}``<br>
``passCordinates(objCord)``

## 6. Propriedades opcionais

``function showNumbers2(a: number, b: number){
    console.log('A: ' + a)
    console.log('B: ' + b)
}``<br>
``showNumbers2(1,2)``

## 7. Tratando parametros opcionais

``function advancedGreenting(firtName: string, lastName?: string){``
    ``if (lastName !== undefined) {``
        ``return`` `Olá ${firtName} ${lastName}`
    ``}``
    ``return `Ola ${firtName}` 
}``
<br>
``console.log(advancedGreenting('Italo','Goes'))``
<br>
``console.log(advancedGreenting('Italo'))``

## 8. Union type

``function showBalance(balance: string | number){
    console.log(`O saldo da conta é: ${balance}`)
}``
<br>
``showBalance(100)``
<br>
``showBalance('muita grana')``
<br>
``var arr2: Array<number | string | boolean> = [1, 2, 'italo']``

## 9. Type alias

``type ID = string | number``
<br>
``function showID(id: ID){
    console.log(`O ID é ${id}`)
}``
<br>
``showID(1)``
<br>
``showID('ID do cachorrao é 10390234')``

## 10. Interface

``interface Point {
    x: number
    y: number
    z: number
}``
<br>
``function showCords(obj: Point){
    console.log(`X: ${obj.x}, Y: ${obj.y}, Z: ${obj.z}`)
}``
<br>
``var coordObj: Point = {
    x: 10,
    y: 15,
    z: 20
}``
<br>
``showCords(coordObj)``

## 11. Interface vs type alias
``//``
<br>
``// A interface atua como se fosse uma VAR e o type atua como se fosse uma CONST``
<br>
``//``
<br>
``interface Pessoa {
    nome: string
}``
<br>
``interface Pessoa {
    idade: number
}``
<br>
``var juntarPessoa: Pessoa = {nome: 'Italo', idade: 23}``
<br>
``console.log(juntarPessoa)``
<br>
``type pessoaType = {
    nome: string
}``
<br>
``type pessoaType = {
    idade: number
}``

## 11. Non-null assertion operator

``const p = document.getElementById('some-picker')``
<br>
``console.log(p!.innerHTML)``

## 12. BigInt

``let n: bigint``
<br>
``n = 12121212121n``

## 13. Symbol

``let symbolA: symbol = Symbol('a')``
<br>
``let symbolB = Symbol('b') // tipo implicito``

## 14. Type guard

``function sum(a: number | string, b: number | string){
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b))
    } else if (typeof a === "number" && typeof b === "number") {
        console.log(a+b)
    } else {
        console.log('Impossivel realizar a soma!')
    }
}``

## 15. Instanceof
``class User {
    name
    constructor(name: string) {
        this.name = name
    }
}``
<br>
``class SuperUser extends User {
    constructor(name: string) {
        super(name)
    }
}``
<br>
``const john = new User('john')``
<br>
``const paul = new SuperUser('paul')``

``function userGreeating(user: object) {
    if(user instanceof SuperUser){
        console.log(`Ola ${user.name}, gostaria de ver os dados de hoje?`)
    } else {
        console.log(`Ola ${user.name}!`)
    }
}``
<br>
``userGreeating(john)``
<br>
``userGreeating(paul)``

## 16. Operador in

``class Dog {
    name
    breed
    constructor(name: string, breed?: string) {
        this.name = name
        if(breed){
            this.breed = breed
        }
    }
}``
<br>
``const turca = new Dog('Turca')``
<br>
``const bob = new Dog('Bob', 'Pastor alemao')``
<br>
``function showDogDetails(dog: Dog){
    if('breed' in dog){
        console.log(`O cachorro é da raça ${dog.breed}`)
    } else {
        console.log('O cachorro é sem raça')
    }
}``
<br>
``showDogDetails(turca)``
<br>
``showDogDetails(bob)``

### Desafio
``type Review = number | boolean``
<br>

``function showUserReview(review: Review) {
    if(!review) {
        console.log(`Você nao avaliou o produto`)
        return
    }
    console.log(`A nota que você deu foi: ${review}`)
}``
<br>

``showUserReview(false)``
<br>
``showUserReview(10)``

## 17. Void
``function semRetorno():void {
    console.log('Essa função nao tem retorno')
}``
<br>
``semRetorno()``

## 18. Callback com argumento
``function greeting(name: string){
    return `Ola ${name}`
}``

``function preGreeting(func: (name: string) => string, userName: string) {
    console.log('Preparando a função...')
    const greet = func(userName)
    console.log(greet)
}``
<br>
``preGreeting(greeting, 'Italo')``
<br>
``preGreeting(greeting, 'Kelly')``

## 19. Generic function
``function firstElement<T>(arr: T[]): T {
    return arr[0]
}``
<br>
``console.log(firstElement([1, 2, 3]))``
<br>
``console.log(firstElement(['Italo', 'Brida']))``

### Exercicio de generic function
``function seiLa<U, T>(obj1: U, obj2: U) {
    return {
        ...obj1,
        ...obj2
    }
}``
<br>
``var newObject = seiLa({name: 'Camaçari'}, {numeroEstado: 5})``
<br>
``console.log(newObject)``

## 20. Constrains
``function biggetsNumber<T extends number | string>(a: T, b: T): T {
    let biggets: T
    if (+a > +b) {
        biggets = a
    } else {
        biggets = b
    }
    return biggets
}``
<br>
``console.log(biggetsNumber<number>(5, 3))``
<br>
``console.log(biggetsNumber<string>('12', '15'))``
<br>
``console.log(biggetsNumber<number | string>(12, 'Teste'))``

### Especificar tipo de argumento
``function mergeArrays<T>(arr1: T[], arr2: T[]) {
    return arr1.concat(arr2)
}``
<br>
``console.log(mergeArrays<number | string>([1,2,3], ["ola", "oi"]))``

## 21. Parametros opcionais
``function modernGreeting(name: string, greet?: string) {
    if(greet){
        return `Olá ${greet} ${name}, tudo bem?`
    }
    return `Olá ${name}, tudo certo?`
}``
<br>
``console.log(modernGreeting('Italo'))``

## 22. Parametros default
``function somaDefault(n: number, m = 10): number {
    return n + m
}``
<br>
``console.log(somaDefault(10))``
<br>
``console.log(somaDefault(10, 90))``

## 23. Unknown
``function doSomething(x: unknown) {
    if(Array.isArray(x)){
        console.log(x[0])
    } else if(typeof x === 'number') {
        console.log('x é um numero')
    }
}``
<br>
``doSomething([1, 2, 3])``
<br>
``doSomething(10)``

## 24. Destructuring
``function showProductDetails({name, price}: {name: string, price: number}):string {
    return `O do produto é ${name} e o preço é ${price}`
}``
<br>
``const shirt = {name: 'Camisa', price: 100}``
<br>
``console.log(showProductDetails(shirt))``

## 25. Object type para função com interface
``interface Product {
    name: string
    price: number
    isAvailable: string
}``
<br>
``function showProductDetails(product: Product) {
    var produtoIndisponivel = product.isAvailable
    if(produtoIndisponivel === 'false'){
        produtoIndisponivel = 'Indisponivel'
        console.log(`Produto: ${product.name}, Preço: ${product.price}, Disponibilidade: ${produtoIndisponivel}`)
    } else {
        produtoIndisponivel = 'Disponivel'
        console.log(`Produto: ${product.name}, Preço: ${product.price}, Disponibilidade: ${produtoIndisponivel}`)
    }
}``
<br>
``const shirt:Product = {
    name: 'Camisa',
    price: 19.99,
    isAvailable: 'false'
}``
<br>
``showProductDetails(shirt)``
<br>
``showProductDetails({name: 'Calça', price: 23.99, isAvailable: 'true'})``

## 26. Interface com propriedade opcional
``interface User {
    email: string
    fone?: number
}``
<br>
``function showUserDetails(user: User) {
    console.log(`Login: ${user.email}`)
    if(user.fone) {
        console.log(`Fone: ${user.fone}`)
    }
}``
<br>
``showUserDetails({email: 'italo@gmail.com', fone: 7109999999})``
<br>
``showUserDetails({email: 'italo@gmail.com'})``

## 27. Readonly
``interface Car {
    brand: string
    readonly wheels: number
}``
<br>
``const fusca:Car = {
    brand: 'VW',
    wheels: 4
}``<br>
``console.log(fusca)``<br>
``// fusca.wheels = 5``

## 28. Index signature
``interface CoordObject {
    [index: string]: number
}``<br>
``let coords: CoordObject = {
    x: 10
}``<br>
``coords.y = 15``<br>
``console.log(coords)``<br>
``console.log(typeof coords.x)``

## 29. Extending interfaces
``interface Human {
    name: string
    age: number
}``<br>
``interface SuperHuman extends Human {
    superPowers: string[]
}``<br>
``const italo: Human = {
    name: 'Italo',
    age: 23
}``<br>
``const brida: SuperHuman = {
    name: 'Brida',
    age: 1,
    superPowers: ['Morder', 'Caçar']
}``<br>
``console.log(brida)``

## 30. Intersection types
``interface Character {
    name: string
}``<br>
``interface Gun {
    type: string
    caliber: number
}``<br>
``type HumanWithGun = Character & Gun``<br>
``const arnold: HumanWithGun = {
    name: 'Arnold',
    type: 'Short',
    caliber: 12
}``<br>
``console.log(arnold)``<br>
``console.log(arnold.caliber)``

## 31. ReadOnlyArray
``let array: ReadonlyArray<string> = ['Maçã', 'Banana']``<br>
``array.forEach((item) => {
    console.log(`Fruta: ${item}`)
})``

## 32. Tuplas
``type fiveNumbers = [number, number, number, number, number]``<br>
``const myNumberArray: fiveNumbers = [1,2,3,4,5]``<br>
``const myNumberArray2: fiveNumbers = [1,2,3,4,5]``<br>
``console.log(myNumberArray)``<br>
``type nameAndAge = [string, number]``<br>
``const anotherUser: nameAndAge = ['Italo', 23]``<br>
``console.log(anotherUser)``

## 33. Tuplas com readonly
``function showNumber(numbers: readonly [number, number]){
    console.log(numbers[0])
    console.log(numbers[1])
}``<br>
``showNumber([1, 2])``
