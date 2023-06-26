var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// type guard
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log('Impossivel realizar a soma!');
    }
}
// instanceof
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var SuperUser = /** @class */ (function (_super) {
    __extends(SuperUser, _super);
    function SuperUser(name) {
        return _super.call(this, name) || this;
    }
    return SuperUser;
}(User));
var john = new User('john');
var paul = new SuperUser('paul');
function userGreeating(user) {
    if (user instanceof SuperUser) {
        console.log("Ola ".concat(user.name, ", gostaria de ver os dados de hoje?"));
    }
    else {
        console.log("Ola ".concat(user.name, "!"));
    }
}
userGreeating(john);
userGreeating(paul);
// operador in
var Dog = /** @class */ (function () {
    function Dog(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
    return Dog;
}());
var turca = new Dog('Turca');
var bob = new Dog('Bob', 'Pastor alemao');
function showDogDetails(dog) {
    if ('breed' in dog) {
        console.log("O cachorro \u00E9 da ra\u00E7a ".concat(dog.breed));
    }
    else {
        console.log('O cachorro é sem raça');
    }
}
showDogDetails(turca);
showDogDetails(bob);
function showUserReview(review) {
    if (!review) {
        console.log("Voc\u00EA nao avaliou o produto");
        return;
    }
    console.log("A nota que voc\u00EA deu foi: ".concat(review));
}
showUserReview(false);
showUserReview(10);
