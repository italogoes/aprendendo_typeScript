// void
function semRetorno():void {
    console.log('Essa função nao tem retorno')
}
semRetorno()

// callback com argumento
function greeting(name: string){
    return `Ola ${name}`
}

function preGreeting(func: (name: string) => string, userName: string) {
    console.log('Preparando a função...')
    const greet = func(userName)
    console.log(greet)
}
preGreeting(greeting, 'Italo')
preGreeting(greeting, 'Kelly')

// generic function
function firstElement<T>(arr: T[]): T {
    return arr[0]
}
console.log(firstElement([1, 2, 3]))
console.log(firstElement(['Italo', 'Brida']))

// exercicio de generic function
function seiLa<U, T>(obj1: U, obj2: U) {
    return {
        ...obj1,
        ...obj2
    }
}
var newObject = seiLa({name: 'Camaçari'}, {numeroEstado: 5})
console.log(newObject)

// constrains
function biggetsNumber<T extends number | string>(a: T, b: T): T {
    let biggets: T

    if (+a > +b) {
        biggets = a
    } else {
        biggets = b
    }

    return biggets
}
console.log(biggetsNumber<number>(5, 3))
console.log(biggetsNumber<string>('12', '15'))
console.log(biggetsNumber<number | string>(12, 'jajajaja'))

// esopecificar tipo de argumento
function mergeArrays<T>(arr1: T[], arr2: T[]) {
    return arr1.concat(arr2)
}
console.log(mergeArrays<number | string>([1,2,3], ["ola", "oi"]))

// parametros opcionais
function modernGreeting(name: string, greet?: string) {
    if(greet){
        return `Olá ${greet} ${name}, tudo bem?`
    }
    return `Olá ${name}, tudo certo?`
}
console.log(modernGreeting('Italo'))

// parametros default
function somaDefault(n: number, m = 10): number {
    return n + m
}
console.log(somaDefault(10))
console.log(somaDefault(10, 90))

// unknown
function doSomething(x: unknown) {
    if(Array.isArray(x)){
        console.log(x[0])
    } else if(typeof x === 'number') {
        console.log('x é um numero')
    }
}
doSomething([1, 2, 3])
doSomething(10)

// destructuring
function showProductDetails({name, price}: {name: string, price: number}):string {
    return `O do produto é ${name} e o preço é ${price}`
}
const shirt = {name: 'Camisa', price: 100}
console.log(showProductDetails(shirt))