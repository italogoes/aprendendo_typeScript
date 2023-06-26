

let numeros: number[] = [1,2,3]

numeros.push(5)

// outra sintaxe
const nums: Array<number> = [10, 23]

// parametros tipados

function soma(a: number, b: number){
    return a + b
}

console.log(soma(10, 20))

// retorno de função

function soma2(a: number, b: number): number{
    return a + b
}

console.log(soma2(10, 20))

// função anonima
setTimeout(() => {

    const salary: number = 1000
    
}, 2000);

// tipos de objeto
function passCordinates(cord: {x: number, y: number}){
    console.log('x cordinates: ' + cord.x)
}

const objCord = {x: 329, y: 234}

passCordinates(objCord)

// propriedades opcionais
function showNumbers2(a: number, b: number){
    console.log('A: ' + a)
    console.log('B: ' + b)
}

showNumbers2(1,2)

// tratando parametros opcionais
function advancedGreenting(firtName: string, lastName?: string){

    if (lastName !== undefined) {
        return `Olá ${firtName} ${lastName}`
    }

    return `Ola ${firtName}`

}
console.log(advancedGreenting('Italo','Goes'))
console.log(advancedGreenting('Italo'))

// union type
function showBalance(balance: string | number){
    console.log(`O saldo da conta é: ${balance}`)
}
showBalance(100)
showBalance('muita grana')

var arr2: Array<number | string | boolean> = [1, 2, 'italo']

// type alias
type ID = string | number

function showID(id: ID){
    console.log(`O ID é ${id}`)
}

showID(1)
showID('ID do cachorrao é 10390234')

// interface

interface Point {
    x: number
    y: number
    z: number
}

function showCords(obj: Point){
    console.log(`X: ${obj.x}, Y: ${obj.y}, Z: ${obj.z}`)
}

var coordObj: Point = {
    x: 10,
    y: 15,
    z: 20
}

showCords(coordObj)

// interface vs type alias
//
// A interface atua como se fosse uma VAR e o type atua como se fosse uma CONST
//
interface Pessoa {
    nome: string
}

interface Pessoa {
    idade: number
}

var juntarPessoa: Pessoa = {nome: 'Italo', idade: 23}
console.log(juntarPessoa)

type pessoaType = {
    nome: string
}

type pessoaType = {
    idade: number
}

// non-null assertion operator
const p = document.getElementById('some-picker')

console.log(p!.innerHTML)

// bigInt
let n: bigint

n = 12121212121n

// symbol
let symbolA: symbol = Symbol('a')
let symbolB = Symbol('b') // tipo implicito