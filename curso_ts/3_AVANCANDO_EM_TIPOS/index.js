"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var numeros = [1, 2, 3];
numeros.push(5);
// outra sintaxe
var nums = [10, 23];
// parametros tipados
function soma(a, b) {
    return a + b;
}
console.log(soma(10, 20));
// retorno de função
function soma2(a, b) {
    return a + b;
}
console.log(soma2(10, 20));
// função anonima
setTimeout(function () {
    var salary = 1000;
}, 2000);
// tipos de objeto
function passCordinates(cord) {
    console.log('x cordinates: ' + cord.x);
}
var objCord = { x: 329, y: 234 };
passCordinates(objCord);
// propriedades opcionais
function showNumbers2(a, b) {
    console.log('A: ' + a);
    console.log('B: ' + b);
}
showNumbers2(1, 2);
// tratando parametros opcionais
function advancedGreenting(firtName, lastName) {
    if (lastName !== undefined) {
        return "Ol\u00E1 ".concat(firtName, " ").concat(lastName);
    }
    return "Ola ".concat(firtName);
}
console.log(advancedGreenting('Italo', 'Goes'));
console.log(advancedGreenting('Italo'));
// union type
function showBalance(balance) {
    console.log("O saldo da conta \u00E9: ".concat(balance));
}
showBalance(100);
showBalance('muita grana');
var arr2 = [1, 2, 'italo'];
function showID(id) {
    console.log("O ID \u00E9 ".concat(id));
}
showID(1);
showID('ID do cachorrao é 10390234');
function showCords(obj) {
    console.log("X: ".concat(obj.x, ", Y: ").concat(obj.y, ", Z: ").concat(obj.z));
}
var coordObj = {
    x: 10,
    y: 15,
    z: 20
};
showCords(coordObj);
var juntarPessoa = { nome: 'Italo', idade: 23 };
console.log(juntarPessoa);
// non-null assertion operator
var p = document.getElementById('some-picker');
console.log(p.innerHTML);
// bigInt
var n;
n = 12121212121n;
