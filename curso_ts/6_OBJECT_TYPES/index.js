function showProductDetails(product) {
    var produtoIndisponivel = product.isAvailable;
    if (produtoIndisponivel === 'false') {
        produtoIndisponivel = 'Indisponivel';
        console.log("Produto: ".concat(product.name, ", Pre\u00E7o: ").concat(product.price, ", Disponibilidade: ").concat(produtoIndisponivel));
    }
    else {
        produtoIndisponivel = 'Disponivel';
        console.log("Produto: ".concat(product.name, ", Pre\u00E7o: ").concat(product.price, ", Disponibilidade: ").concat(produtoIndisponivel));
    }
}
var shirt = {
    name: 'Camisa',
    price: 19.99,
    isAvailable: 'false'
};
showProductDetails(shirt);
showProductDetails({ name: 'Calça', price: 23.99, isAvailable: 'true' });
function showUserDetails(user) {
    console.log("Login: ".concat(user.email));
    if (user.fone) {
        console.log("Fone: ".concat(user.fone));
    }
}
showUserDetails({ email: 'italo@gmail.com', fone: 7109999999 });
showUserDetails({ email: 'italo@gmail.com' });
var fusca = {
    brand: 'VW',
    wheels: 4
};
console.log(fusca);
var coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
console.log(typeof coords.x);
var italo = {
    name: 'Italo',
    age: 23
};
var brida = {
    name: 'Brida',
    age: 1,
    superPowers: ['Morder', 'Caçar']
};
console.log(brida);
var arnold = {
    name: 'Arnold',
    type: 'Short',
    caliber: 12
};
console.log(arnold);
console.log(arnold.caliber);
// ReadOnlyArray
var array = ['Maçã', 'Banana'];
array.forEach(function (item) {
    console.log("Fruta: ".concat(item));
});
var myNumberArray = [1, 2, 3, 4, 5];
var myNumberArray2 = [1, 2, 3, 4, 5];
console.log(myNumberArray);
var anotherUser = ['Italo', 23];
console.log(anotherUser);
// Tuplas com readonly
function showNumber(numbers) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumber([1, 2]);
