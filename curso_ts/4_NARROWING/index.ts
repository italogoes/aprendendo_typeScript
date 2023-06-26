// type guard
function sum(a: number | string, b: number | string){

    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b))
    } else if (typeof a === "number" && typeof b === "number") {
        console.log(a+b)
    } else {
        console.log('Impossivel realizar a soma!')
    }

}

// instanceof
class User {
    name

    constructor(name: string) {
        this.name = name
    }
}

class SuperUser extends User {
    constructor(name: string) {
        super(name)
    }
}

const john = new User('john')
const paul = new SuperUser('paul')

function userGreeating(user: object) {
    if(user instanceof SuperUser){
        console.log(`Ola ${user.name}, gostaria de ver os dados de hoje?`)
    } else {
        console.log(`Ola ${user.name}!`)
    }
}

userGreeating(john)
userGreeating(paul)

// operador in
class Dog {
    name
    breed

    constructor(name: string, breed?: string) {
        this.name = name
        if(breed){
            this.breed = breed
        }
    }
}

const turca = new Dog('Turca')
const bob = new Dog('Bob', 'Pastor alemao')

function showDogDetails(dog: Dog){
    if('breed' in dog){
        console.log(`O cachorro é da raça ${dog.breed}`)
    } else {
        console.log('O cachorro é sem raça')
    }
}

showDogDetails(turca)
showDogDetails(bob)

// desafio
type Review = number | boolean

function showUserReview(review: Review) {

    if(!review) {
        console.log(`Você nao avaliou o produto`)
        return
    }

    console.log(`A nota que você deu foi: ${review}`)
}

showUserReview(false)
showUserReview(10)