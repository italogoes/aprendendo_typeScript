var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// void
function semRetorno() {
    console.log('Essa função nao tem retorno');
}
semRetorno();
// callback com argumento
function greeting(name) {
    return "Ola ".concat(name);
}
function preGreeting(func, userName) {
    console.log('Preparando a função...');
    var greet = func(userName);
    console.log(greet);
}
preGreeting(greeting, 'Italo');
preGreeting(greeting, 'Kelly');
// generic function
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(['Italo', 'Brida']));
// exercicio de generic function
function seiLa(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var newObject = seiLa({ name: 'Camaçari' }, { numeroEstado: 5 });
console.log(newObject);
// constrains
function biggetsNumber(a, b) {
    var biggets;
    if (+a > +b) {
        biggets = a;
    }
    else {
        biggets = b;
    }
    return biggets;
}
console.log(biggetsNumber(5, 3));
console.log(biggetsNumber('12', '15'));
console.log(biggetsNumber(12, 'jajajaja'));
// esopecificar tipo de argumento
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], ["ola", "oi"]));
// parametros opcionais
function modernGreeting(name, greet) {
    if (greet) {
        return "Ol\u00E1 ".concat(greet, " ").concat(name, ", tudo bem?");
    }
    return "Ol\u00E1 ".concat(name, ", tudo certo?");
}
console.log(modernGreeting('Italo'));
// parametros default
function somaDefault(n, m) {
    if (m === void 0) { m = 10; }
    return n + m;
}
console.log(somaDefault(10));
console.log(somaDefault(10, 90));
// unknown
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === 'number') {
        console.log('x é um numero');
    }
}
doSomething([1, 2, 3]);
doSomething(10);
// destructuring
function showProductDetails(_a) {
    var name = _a.name, price = _a.price;
    return "O do produto \u00E9 ".concat(name, " e o pre\u00E7o \u00E9 ").concat(price);
}
var shirt = { name: 'Camisa', price: 100 };
console.log(showProductDetails(shirt));
